# Heading Font Size Standardization Guide

## 🎯 Overview

This guide standardizes all heading font sizes across the Presidency University website to ensure visual consistency and professional appearance.

## 📐 Standard Font Sizes

### H1 - Page/Hero Titles
**Use Case**: Page titles, hero section main heading

```
Mobile:  text-4xl  (36px)
Tablet:  md:text-5xl (48px)
Desktop: lg:text-6xl (60px)
```

**Component**: `<H1>Your Text</H1>`

**Example**:
```tsx
import { H1 } from "@/app/components/Headings";

<H1>Your World-Class Education Starts in Bangalore</H1>
```

---

### H2 - Section Headers (PRIMARY)
**Use Case**: Main section headers, page sections, major content divisions

```
Mobile:  text-2xl  (24px)
Tablet:  md:text-3xl (30px)
Desktop: lg:text-4xl (36px)
```

**Component**: `<H2>Your Text</H2>`

**Example**:
```tsx
<H2>Find Your Perfect Degree Programme</H2>
```

---

### H3 - Subsection Headers (SECONDARY)
**Use Case**: Subsection headers, column headers, secondary sections

```
Mobile:  text-xl  (20px)
Tablet:  md:text-2xl (24px)
Desktop: lg:text-3xl (30px)
```

**Component**: `<H3>Your Text</H3>`

**Example**:
```tsx
<H3>Computer Science & Engineering</H3>
```

---

### H4 - Component Titles
**Use Case**: Card titles, feature titles, component headers

```
Mobile:  text-lg  (18px)
Tablet:  md:text-xl (20px)
Desktop: lg:text-2xl (24px)
```

**Component**: `<H4>Your Text</H4>`

**Example**:
```tsx
<H4>Global Placements</H4>
```

---

### H5 - Small Titles
**Use Case**: Small headers, labels, badges, emphasis text

```
Mobile:  text-base (16px)
Tablet:  md:text-lg (18px)
Desktop: lg:text-xl (20px)
```

**Component**: `<H5>Your Text</H5>`

**Example**:
```tsx
<H5>Key Highlights</H5>
```

---

### H6 - Extra Small Titles
**Use Case**: Small component headers, tabs, small sections

```
Mobile:  text-sm  (14px)
Tablet:  md:text-base (16px)
Desktop: lg:text-lg (18px)
```

**Component**: `<H6>Your Text</H6>`

**Example**:
```tsx
<H6>About This Programme</H6>
```

---

## 📋 Quick Reference Table

| Level | Mobile | Tablet | Desktop | Component | Primary Use |
|-------|--------|--------|---------|-----------|-------------|
| H1 | text-4xl (36px) | md:text-5xl (48px) | lg:text-6xl (60px) | `<H1>` | Page/hero titles |
| H2 | text-2xl (24px) | md:text-3xl (30px) | lg:text-4xl (36px) | `<H2>` | Section headers |
| H3 | text-xl (20px) | md:text-2xl (24px) | lg:text-3xl (30px) | `<H3>` | Subsection headers |
| H4 | text-lg (18px) | md:text-xl (20px) | lg:text-2xl (24px) | `<H4>` | Component titles |
| H5 | text-base (16px) | md:text-lg (18px) | lg:text-xl (20px) | `<H5>` | Small headers |
| H6 | text-sm (14px) | md:text-base (16px) | lg:text-lg (18px) | `<H6>` | Extra small titles |

---

## 🔄 How to Update Components

### Before (Inconsistent)
```tsx
<h2 className="text-2xl md:text-3xl font-serif text-white">
  Our Programmes
</h2>

<h3 className="text-4xl text-[#1e3a5f]">
  Computer Science
</h3>

<h4 className="text-sm font-semibold">
  Engineering Programmes
</h4>
```

### After (Standardized)
```tsx
import { H2, H3, H4 } from "@/app/components/Headings";

<H2 className="text-white">Our Programmes</H2>

<H3>Computer Science</H3>

<H4>Engineering Programmes</H4>
```

---

## 🎨 Color Customization

The standard components use `text-[#1e3a5f]` (dark blue). To use different colors:

```tsx
// White text
<H2 className="text-white">White Heading</H2>

// Custom color
<H2 className="text-[#F58A3C]">Orange Heading</H2>

// Gradient
<H2 className="bg-gradient-to-r from-[#0A8F96] to-[#F58A3C] bg-clip-text text-transparent">
  Gradient Heading
</H2>
```

---

## 📊 Current Inconsistencies Found

### Usage Statistics
```
text-2xl: 35 instances
text-3xl: 38 instances
text-4xl: 39 instances
text-5xl: 7 instances
text-xl:  39 instances
text-lg:  28 instances
```

### Major Issues
- Section headers vary between text-2xl, text-3xl, and text-4xl
- Some pages use text-5xl for section headers (too large)
- Component titles inconsistently sized between text-lg and text-2xl
- No standardized responsive breakpoints

---

## 📁 Files to Update

### High Priority (Main Pages)
- [ ] app/page.tsx
- [ ] app/about/page.tsx
- [ ] app/bangalore-life/page.tsx
- [ ] app/campus-life/page.tsx
- [ ] app/contact/page.tsx

### Component Updates
- [ ] app/components/Navigation.tsx
- [ ] app/components/Footer.tsx
- [ ] app/components/Course/\*.tsx
- [ ] app/components/School/\*.tsx
- [ ] app/\*/components/\*.tsx (all component directories)

---

## 🚀 Implementation Steps

### Step 1: Import Components
```tsx
import { H1, H2, H3, H4, H5, H6 } from "@/app/components/Headings";
```

### Step 2: Replace HTML Tags
```tsx
// Change this:
<h2 className="text-2xl md:text-3xl font-bold text-[#1e3a5f]">
  My Section
</h2>

// To this:
<H2>My Section</H2>
```

### Step 3: Apply Color/Style Overrides if Needed
```tsx
// If you need white text:
<H2 className="text-white">White Section</H2>

// If you need serif font:
<H2 className="font-serif">Serif Section</H2>
```

---

## ✅ Quality Checklist

When updating components, verify:

- [ ] Used correct heading level (H1, H2, H3, etc.)
- [ ] Removed inline `text-size` classes (font sizes are inherited)
- [ ] Maintained responsive behavior (mobile, tablet, desktop)
- [ ] Colors applied if different from default dark blue
- [ ] Font styles preserved (serif, semibold, bold, etc.)
- [ ] Line height appropriate for text length
- [ ] Spacing (mb, mt) maintained

---

## 📝 Examples by Section

### Homepage Hero
```tsx
<H1>Your World-Class Education Starts in Bangalore</H1>
```

### Section Headers
```tsx
<H2>A Global University Experience in the Heart of India</H2>
```

### Subsection Headers
```tsx
<H3>Computer Science & Engineering</H3>
```

### Feature/Card Titles
```tsx
<H4>World-Class Faculty</H4>
```

---

## 🎯 Design Principles

1. **Consistency**: Same level headers always have same size
2. **Hierarchy**: Clear visual distinction between levels
3. **Responsiveness**: Scales appropriately on all devices
4. **Accessibility**: Sufficient contrast and readable sizes
5. **Flexibility**: Easy customization without class bloat

---

## 🔗 Related Files

- `app/components/Headings.tsx` - Standard heading components
- `app/lib/utils.ts` - Additional utility functions
- Tailwind config - Font size definitions

---

## 📞 Support

For questions about heading standardization:
1. Check this guide for the correct heading level
2. Review examples in the components
3. Use the provided `<H1>` through `<H6>` components
4. Apply color overrides using `className` prop if needed

---

**Last Updated**: May 25, 2026
**Version**: 1.0.0
**Status**: Ready for Implementation
