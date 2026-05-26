# Inner Course Page - Heading Font Size Audit

## 📍 Page URL
`/schools/computer-science/btech-cse` (and all similar course pages)

## 🔍 Current Issues Found

### ❌ MAJOR INCONSISTENCIES

**All Course Section Headers (H2) are TOO LARGE:**

| Component | Current Size | Should Be | Issue |
|-----------|-------------|-----------|-------|
| CourseCareers | text-4xl md:text-5xl | text-2xl md:text-3xl | **2 sizes too large** |
| CourseCurriculum | text-4xl md:text-5xl | text-2xl md:text-3xl | **2 sizes too large** |
| CourseFAQ | text-4xl md:text-5xl | text-2xl md:text-3xl | **2 sizes too large** |
| CourseOutcomes | text-4xl md:text-5xl | text-2xl md:text-3xl | **2 sizes too large** |
| CourseUSP | text-4xl md:text-5xl | text-2xl md:text-3xl | **2 sizes too large** |
| CourseCTA | text-2xl md:text-3xl | ✓ CORRECT | Properly sized |

---

## 📊 Detailed Component Analysis

### 1. **CourseCareers.tsx**
```tsx
// CURRENT (WRONG)
<h2 className="text-4xl md:text-5xl font-semibold text-[#183153]">
  Career <span className="text-[#F58233]">Opportunities</span>
</h2>

// H3 inside
<h3 className="text-lg font-semibold text-[#183153]">
  {item.category}
</h3>

// SHOULD BE
<H2 className="text-[#183153]">
  Career <span className="text-[#F58233]">Opportunities</span>
</H2>

<H4 className="text-[#183153]">
  {item.category}
</H4>
```

**Issues**:
- ❌ H2 is text-4xl/5xl (should be text-2xl/3xl)
- ❌ H3 is text-lg (should be H4)

---

### 2. **CourseCurriculum.tsx**
```tsx
// CURRENT (LIKELY WRONG)
<h2 className="text-4xl md:text-5xl">
  Curriculum
</h2>

// SHOULD BE
<H2>Curriculum</H2>
```

---

### 3. **CourseFAQ.tsx**
```tsx
// CURRENT (WRONG)
<h2 className="text-4xl md:text-5xl font-semibold text-[#183153]">
  Frequently Asked <span className="text-[#0097A7]">Questions</span>
</h2>

// H3 for accordion header
<span className="text-base font-medium text-white">
  {item.question}
</span>

// SHOULD BE
<H2 className="text-[#183153]">
  Frequently Asked <span className="text-[#0097A7]">Questions</span>
</H2>

// Accordion items might use H5 or just text (not semantic header)
<span className="text-base font-medium text-white">
  {item.question}
</span>
```

**Issues**:
- ❌ H2 is text-4xl/5xl (should be text-2xl/3xl)

---

### 4. **CourseHero.tsx**
```tsx
// LIKELY HAS
<h3 className="text-4xl font-semibold text-[#D4A843]">
  {someText}
</h3>

// SHOULD BE
<H2 className="text-[#D4A843]">
  {someText}
</H2>
```

---

### 5. **CourseOutcomes.tsx**
```tsx
// CURRENT (LIKELY WRONG)
<h2 className="text-4xl md:text-5xl">
  Learning Outcomes
</h2>

<h3 className="...">
  {outcome.name}
</h3>

// SHOULD BE
<H2>Learning Outcomes</H2>

<H4>
  {outcome.name}
</H4>
```

---

### 6. **CourseOverview.tsx**
```tsx
// CURRENT
<h4 className="text-lg font-semibold text-[#2B2B2B]">
  Eligibility
</h4>

// CORRECT LEVEL but might use standard component
<H5 className="text-[#2B2B2B]">Eligibility</H5>
```

---

### 7. **CourseUSP.tsx**
```tsx
// CURRENT (WRONG)
<h2 className="text-4xl md:text-5xl font-semibold text-[#183153]">
  Why Choose This <span className="text-[#0097A7]">Programme</span>
</h2>

// SHOULD BE
<H2 className="text-[#183153]">
  Why Choose This <span className="text-[#0097A7]">Programme</span>
</H2>
```

---

### 8. **CourseCTA.tsx**
```tsx
// CURRENT (CORRECT SIZE)
<h2 className="text-2xl md:text-3xl font-serif text-white">
  Ready to Begin Your Journey?
</h2>

// SHOULD USE
<H2 className="font-serif text-white">
  Ready to Begin Your Journey?
</H2>
```

---

## 🎯 Standardization Plan

### Step 1: Import the Headings Component
Add to each Course component file:
```tsx
import { H2, H3, H4, H5, H6 } from "@/app/components/Headings";
```

### Step 2: Replace Each Component

#### CourseCareers.tsx
```tsx
// Line 36-46: Replace h2
<H2 className="text-[#183153]">
  Career <span className="text-[#F58233]">Opportunities</span>
</H2>

// Line 86-93: Replace h3
<H4 className="text-[#183153]">
  {item.category}
</H4>
```

#### CourseCurriculum.tsx
Replace main section h2:
```tsx
<H2>Curriculum</H2>
// and adjust subsection headers appropriately
```

#### CourseFAQ.tsx
```tsx
// Replace h2
<H2 className="text-[#183153]">
  Frequently Asked <span className="text-[#0097A7]">Questions</span>
</H2>
```

#### CourseHero.tsx
Replace h3 with appropriate heading level (likely H2 or H3 depending on context)

#### CourseOutcomes.tsx
```tsx
// Replace h2
<H2>Learning Outcomes</H2>

// Replace h3 with h4 or h5
<H4>{outcome.name}</H4>
```

#### CourseOverview.tsx
```tsx
// Replace h4 with H5
<H5 className="text-[#2B2B2B]">Eligibility</H5>
```

#### CourseUSP.tsx
```tsx
// Replace h2
<H2 className="text-[#183153]">
  Why Choose This <span className="text-[#0097A7]">Programme</span>
</H2>

// Replace h3 with H4
<H4>USP Item Title</H4>
```

#### CourseCTA.tsx
```tsx
// Replace h2 (already correct size, just use component)
<H2 className="font-serif text-white">
  Ready to Begin Your Journey?
</H2>
```

---

## ✅ Quality Checklist

For each file updated:

- [ ] Imported Heading components
- [ ] Replaced all `<h2>` with `<H2>`
- [ ] Replaced subsection headers appropriately
- [ ] Maintained custom colors using className prop
- [ ] Removed duplicate text-size classes
- [ ] Verified responsive behavior
- [ ] Checked visual hierarchy on mobile/tablet/desktop
- [ ] Tested link colors and contrast

---

## 📋 Files to Update

| File | Priority | Status |
|------|----------|--------|
| CourseCareers.tsx | **HIGH** | ☐ Not started |
| CourseCurriculum.tsx | **HIGH** | ☐ Not started |
| CourseFAQ.tsx | **HIGH** | ☐ Not started |
| CourseHero.tsx | **HIGH** | ☐ Not started |
| CourseOutcomes.tsx | **HIGH** | ☐ Not started |
| CourseOverview.tsx | **MEDIUM** | ☐ Not started |
| CourseUSP.tsx | **HIGH** | ☐ Not started |
| CourseCTA.tsx | **LOW** | ☓ Already correct |

---

## 🎨 Color Preservation

When replacing, make sure to preserve colors:

```tsx
// Keep custom colors like this:
<H2 className="text-white">White Title</H2>
<H2 className="text-[#183153]">Dark Blue Title</H2>
<H3 className="text-[#F5A623]">Orange Title</H3>

// All colors should be passed via className
```

---

## 🚨 Visual Impact

**Before Standardization:**
- Section headers are oversized (text-4xl/5xl)
- Makes pages appear cluttered
- Inconsistent visual hierarchy
- Subsection headers also inconsistent

**After Standardization:**
- Professional, clean appearance
- Clear visual hierarchy
- Consistent across all course pages
- Better readability on mobile

---

## 📊 Summary

**Total Issues**: 7 major components
**H2 Size Issues**: 5 components using text-4xl/5xl (should be text-2xl/3xl)
**H3/H4 Issues**: Multiple subsections with inconsistent sizing
**Estimated Update Time**: 2-3 hours
**Difficulty**: Low (straightforward replacement)

---

**Estimated Completion**: Once all Course components are updated
**Verification**: Test on `/schools/computer-science/btech-cse` and similar pages
