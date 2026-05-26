const fs = require('fs');

let lines = fs.readFileSync('app/components/Navigation.tsx', 'utf8').split('\n');

let i = 0;
let result = [];
let replacements = 0;

while (i < lines.length) {
  const line = lines[i];

  // Detect start of a phd: [ block
  if (/^\s+phd: \[$/.test(line)) {
    let j = i + 1;
    let blockLines = [line];
    let bracketDepth = 1;

    while (j < lines.length && bracketDepth > 0) {
      const l = lines[j];
      blockLines.push(l);
      // count brackets carefully
      for (const ch of l) {
        if (ch === '[') bracketDepth++;
        if (ch === ']') bracketDepth--;
        if (bracketDepth === 0) break;
      }
      j++;
    }

    const blockText = blockLines.join('\n');

    // Only replace if it has old phd-xxx href paths
    if (/href: "\/schools\/[^"]+\/phd-/.test(blockText)) {
      const match = blockText.match(/href: "\/schools\/([^\/\"]+)\/phd-/);
      const schoolSlug = match ? match[1] : 'school';
      const indent = (line.match(/^(\s+)/) || ['', '      '])[1];
      const replacement = [
        indent + 'phd: [',
        indent + '  {',
        indent + '    label: "Ph.D. Research Programme",',
        indent + '    href: "/schools/' + schoolSlug + '#phd-research",',
        indent + '  },',
        indent + '],'
      ].join('\n');
      result.push(replacement);
      replacements++;
      console.log('Replaced PhD block for school: ' + schoolSlug);
      i = j;
    } else {
      // Keep as-is
      result.push(...blockLines);
      i = j;
    }
  } else {
    result.push(line);
    i++;
  }
}

fs.writeFileSync('app/components/Navigation.tsx', result.join('\n'), 'utf8');
console.log('Total replacements: ' + replacements);
console.log('Done');
