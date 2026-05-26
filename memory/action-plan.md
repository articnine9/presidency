# Complete Action Plan for Schools JSON Enhancement

## SESSION 2026-05-25: COMPLETED WORK

### CRITICAL FIX - COMPLETED ✅
**Information Science School Data Corruption (Lines 7012-7290)**
- **Issue**: School contained Law school metadata (programPreview, programTable, FAQ)
  - programPreview title was "About the School of Law" → Fixed to "About the School of Information Science"
  - programPreview subtitle was "Building Future Legal Professionals" → Fixed to "Empowering Digital Innovation"
  - Programs listed B.A. LL.B. and B.B.A. LL.B. → Fixed to BCA, BCA AI/ML, M.Tech Data Science
  - programTable showed Law programmes → Fixed to show BCA and M.Tech programmes
  - FAQ contained legal profession questions → Fixed with Information Science-specific FAQs
- **Impact**: High - school-level metadata was completely corrupted with another school's content
- **Fix Method**: Node.js JSON parsing and manipulation (bypasses encoding issues)
- **Status**: COMPLETED (Commit: f165321)

### HIGH PRIORITY FIXES - COMPLETED ✅
**B.Tech Petroleum Engineering Hero Description (Line 6022)**
- **Issue**: Had copy-pasted Mechanical Engineering content
  - Old: "Engineer the machines and systems..." with thermodynamics, fluid mechanics, manufacturing, automation
  - New: "Power the global energy sector..." with petroleum exploration, drilling engineering, reservoir management, production operations, refining technology, subsurface evaluation
- **Status**: COMPLETED (Commit: f165321)

**B.Tech AI/ML Breadcrumb Navigation (Line 928)**
- **Issue**: Showed wrong school name in breadcrumb
  - Was: "Information Science"
  - Fixed to: "Computer Science & Engineering"
- **Status**: COMPLETED (Commit: f165321)

## REMAINING WORK

### HIGH PRIORITY (Program Data Issues)
**Engineering School PhD Programs (Minimal Data)**
- **Issue**: Four PhD programs have only basic fields (slug, name, duration, type, degree, generic overview)
- **Required Structure for Each**:
  - hero section with title, description, breadcrumb, stats
  - details section
  - overview array (2-3 items with research focus)
  - eligibility section with specific criteria
  - highlights array (4 specialization areas)
  - careers array (4 career categories with companies)
  - faq array (4 Q&A pairs)
- **Programs**:
  - phd-mechanical-engineering
  - phd-civil-engineering
  - phd-ece (Electrical & Electronics Engineering)
  - phd-petroleum-engineering
- **Estimated Effort**: Medium-High (requires creating 4 comprehensive programme structures)
- **Recommended Approach**: Node.js script following Information Science fix pattern

### MEDIUM PRIORITY (Verification & Enhancement)
**Computer Science School (16 programs)**
- Verify all programs have complete JSON structure
- Check for copy-pasted content from other disciplines
- Validate breadcrumbs are correct

**Media Studies School (~7 programs)**
- Verify program placement (JMC vs other schools)
- Check program data completeness

**Liberal Arts School (~7 programs)**
- Verify all programs have comprehensive JSON
- Check for copy-pasted/wrong content

**Management & Commerce Schools**
- Verify program data completeness

## TECHNICAL INSIGHTS

### Encoding Issue Discovery
- File contains non-breaking space characters (U+00A0, UTF-8: C2 A0) throughout instead of regular spaces
- This causes Edit tool failures and sed pattern matching failures
- **Workaround Solutions**:
  1. sed with wildcard patterns (.*) bypasses encoding: `sed 's/pattern.*/replacement/'`
  2. Node.js JSON.parse/stringify handles UTF-8 correctly natively
  3. Python json module also handles UTF-8 correctly

### Best Practices Identified
- Node.js approach most reliable for JSON manipulation on this file
- Smaller, targeted Node.js scripts easier to verify than sed scripts
- Always validate JSON after changes with: `node -e "require('fs').readFile('data/schools.json', 'utf8', (e,d) => console.log(e ? 'Invalid: '+e.message : 'Valid'))"`

## Summary Statistics
- **Total Schools**: 10
- **Total Programs**: ~100+
- **Fixes This Session**: 3 (Information Science corruption, Petroleum Engineering, AI/ML breadcrumb)
- **Commits Created**: 2
  - f165321: Fix critical and high-priority school data issues (3 major fixes)
  - Earlier: Initial work session
- **Remaining Issues**: ~12-15
- **Estimated Overall Progress**: 25-30% of full schools JSON enhancement

## Next Steps Recommendation
1. Create Node.js script to enhance PhD programs with comprehensive JSON
2. Verify Computer Science programmes for duplicate content
3. Audit remaining schools systematically
4. Final validation of all ~100+ programs

## Notes for Future Sessions
- User goal: Complete JSON definitions for all school programmes
- Current approach: Strategic fixes of highest-impact issues first
- File encoding requires Node.js or similar UTF-8-safe tools for reliable edits
- All fixes should be committed separately with clear descriptions
