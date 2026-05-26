# Heading Font Size Standardization - Implementation Checklist

## ✅ What Was Found

**Current State**: Inconsistent heading sizes across the website
- **text-2xl**: 35 instances
- **text-3xl**: 38 instances  
- **text-4xl**: 39 instances
- **text-5xl**: 7 instances
- **text-xl**: 39 instances
- **text-lg**: 28 instances

**Problem**: No standardization - making visual hierarchy unclear

---

## 🎯 Solution Provided

Created standardized heading components in `app/components/Headings.tsx`

### Standard Heading Levels

```
H1 (Page Titles)     : text-4xl → md:text-5xl → lg:text-6xl
H2 (Section Headers) : text-2xl → md:text-3xl → lg:text-4xl ⭐ MOST COMMON
H3 (Subsections)     : text-xl → md:text-2xl → lg:text-3xl
H4 (Component Titles): text-lg → md:text-xl → lg:text-2xl
H5 (Small Headers)   : text-base → md:text-lg → lg:text-xl
H6 (Extra Small)     : text-sm → md:text-base → lg:text-lg
```

---

## 📋 Implementation Steps

### Step 1: Import Headings Component
Add this import to your component file:

```tsx
import { H1, H2, H3, H4, H5, H6 } from "@/app/components/Headings";
```

### Step 2: Replace HTML Tags

**BEFORE** (Inconsistent):
```tsx
<h2 className="text-2xl md:text-3xl font-semibold text-[#1e3a5f]">
  Find Your Perfect Degree Programme
</h2>

<h3 className="text-4xl text-[#1e3a5f]">
  Computer Science & Engineering
</h3>
```

**AFTER** (Standardized):
```tsx
<H2>Find Your Perfect Degree Programme</H2>

<H3>Computer Science & Engineering</H3>
```

### Step 3: Apply Color/Font Customization (if needed)

```tsx
{/* White text */}
<H2 className="text-white">Section Title</H2>

{/* Custom color */}
<H3 className="text-[#F58A3C]">Orange Header</H3>

{/* Serif font */}
<H2 className="font-serif">Fancy Header</H2>

{/* Bold variant */}
<H4 className="font-bold">Strong Title</H4>
```

---

## ✓ Priority 1: Critical Pages (DO FIRST)

### [ ] Homepage - `app/page.tsx`
```
Status: ☐ Not started ☐ In progress ☐ Complete
Notes: _________________________________
```

**Sections to update**:
- [ ] Hero main title (use H1)
- [ ] "Find Your Perfect Degree Programme" (use H2)
- [ ] "A Global University Experience" (use H2)
- [ ] All subsection headers (use H3)
- [ ] All card titles (use H4)

---

### [ ] About Page - `app/about/page.tsx`
```
Status: ☐ Not started ☐ In progress ☐ Complete
Notes: _________________________________
```

**Components to update**:
- [ ] `app/about/components/AboutHero.tsx` (use H1)
- [ ] `app/about/components/CTASection.tsx` (standardize to H2)
- [ ] `app/about/components/GlobalPresence.tsx` (use H2)
- [ ] `app/about/components/LeadershipSection.tsx` (use H3)
- [ ] `app/about/components/ResearchInnovation.tsx` (use H4)
- [ ] `app/about/components/VisionMission.tsx` (use H5)

---

### [ ] Bangalore Life Page - `app/bangalore-life/page.tsx`
```
Status: ☐ Not started ☐ In progress ☐ Complete
Notes: _________________________________
```

**Components to update**:
- [ ] `BangaloreHighlights.tsx` → H2
- [ ] `BangaloreTechSection.tsx` → H2 (reduce from text-5xl)
- [ ] `CareerSection.tsx` → H2 (reduce from text-5xl)
- [ ] `CostSection.tsx` → Standardize
- [ ] `CTASection.tsx` → H2
- [ ] `HeroSection.tsx` → H1
- [ ] `LifeHero.tsx` → H1
- [ ] `LivingFoodSection.tsx` → H2

---

### [ ] Campus Life Page - `app/campus-life/page.tsx`
```
Status: ☐ Not started ☐ In progress ☐ Complete
Notes: _________________________________
```

**Components to update**:
- [ ] `ClubSection.tsx` → H2
- [ ] `ClubsSection.tsx` → H3
- [ ] `CourseCTA.tsx` → H2
- [ ] `FeaturesSection.tsx` → H3 or H2
- [ ] `HeroSection.tsx` → H1
- [ ] `SupportSection.tsx` → H2
- [ ] `WellbeingSection.tsx` → H3 or H2

---

## ✓ Priority 2: Component Libraries

### [ ] School Components - `app/components/School/`
```
Status: ☐ Not started ☐ In progress ☐ Complete
Notes: _________________________________
```

- [ ] `SchoolHero.tsx` → Use H1
- [ ] `ProgramList.tsx` → Standardize headings
- [ ] `SchoolOverview.tsx` → Check all headers
- [ ] All other school components

---

### [ ] Course Components - `app/components/Course/`
```
Status: ☐ Not started ☐ In progress ☐ Complete
Notes: _________________________________
```

- [ ] `CourseCTA.tsx` → H2
- [ ] `CourseFAQ.tsx` → H5
- [ ] `CourseHero.tsx` → H1 or H2
- [ ] `CourseOverview.tsx` → Check consistency
- [ ] All other course components

---

### [ ] Accreditation Section - `app/components/accreditation-section.tsx`
```
Status: ☐ Not started ☐ In progress ☐ Complete
Notes: _________________________________
```

- [ ] Reduce text-4xl md:text-5xl to appropriate level

---

## ✓ Priority 3: All Remaining Components

### [ ] Contact Page
```
Status: ☐ Not started ☐ In progress ☐ Complete
Notes: _________________________________
```

- [ ] All components in `app/contact/components/`

---

### [ ] International Pages
```
Status: ☐ Not started ☐ In progress ☐ Complete
Notes: _________________________________
```

- [ ] `app/international/apply/components/`
- [ ] `app/international/faq/components/`
- [ ] `app/international/overview/components/`
- [ ] `app/international/pg/components/`
- [ ] `app/international/phd/components/`
- [ ] `app/international/ug/components/`

---

## 📊 Progress Tracking

**Total Files to Update**: ~50+ components

| Priority | Target | Completed | % Done |
|----------|--------|-----------|--------|
| P1 | 4 files | 0 | 0% |
| P2 | ~10 files | 0 | 0% |
| P3 | ~36+ files | 0 | 0% |
| **TOTAL** | **50+** | **0** | **0%** |

---

## 🧪 Verification Checklist

For each updated component, verify:

- [ ] Correct heading level used (H1-H6)
- [ ] No inline `text-*` classes in heading
- [ ] Responsive behavior works (mobile, tablet, desktop)
- [ ] Colors applied correctly if different from default
- [ ] Font styles (serif, bold, semibold) preserved
- [ ] Line height appropriate
- [ ] Spacing (margins) maintained
- [ ] Visual hierarchy is clear

---

## 🎯 Quick Reference

### When to Use Each Heading

| Use H1 | Use H2 | Use H3 | Use H4 | Use H5 | Use H6 |
|--------|--------|--------|--------|--------|--------|
| Page titles | Section headers | Subsections | Card titles | Small labels | Small sections |
| Hero main | Primary content | Categories | Features | Badges | Tabs |
| Large banners | Page sections | Columns | Components | Emphasis | Minor headers |

---

## 📚 Documentation Files

- **`HEADING_STANDARDIZATION_GUIDE.md`** - Detailed guide with examples
- **`HEADING_UPDATE_CHECKLIST.md`** - This file, for tracking progress
- **`app/components/Headings.tsx`** - Standardized heading components

---

## 💡 Pro Tips

1. **Use find and replace** in your IDE:
   - Find: `<h2 className="text-2xl md:text-3xl`
   - Replace: `<H2 className="` (then add back custom classes)

2. **Process one page at a time** to avoid confusion

3. **Test on mobile** to ensure responsive scaling works

4. **Keep custom classes minimal**:
   ```tsx
   // Good
   <H2 className="text-white">Title</H2>
   
   // Avoid
   <H2 className="text-white text-2xl md:text-3xl font-bold">Title</H2>
   ```

5. **Use the Headings component** for consistency

---

## ✅ Final Checklist

Before marking website as complete:

- [ ] All H1 tags use correct size
- [ ] All H2 tags use consistent size (text-2xl/3xl/4xl)
- [ ] All H3 tags use consistent size (text-xl/2xl/3xl)
- [ ] All H4 tags use consistent size (text-lg/xl/2xl)
- [ ] No manual text-size classes in headings
- [ ] Responsive behavior verified
- [ ] Colors customized where needed
- [ ] Visual hierarchy is clear throughout site
- [ ] All pages tested on mobile, tablet, desktop
- [ ] Documentation updated

---

**Start Date**: ________________
**Target Completion**: ________________
**Actual Completion**: ________________

---

## 📝 Notes

```
Progress Notes:
_________________________________________________________________
_________________________________________________________________
_________________________________________________________________
_________________________________________________________________
```

---

For detailed documentation, see: **HEADING_STANDARDIZATION_GUIDE.md**
