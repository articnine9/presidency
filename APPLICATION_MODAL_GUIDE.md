# Application Modal Implementation Guide

## Overview
A global application modal has been implemented across the Presidency University website. This modal allows users to submit their application with education-related fields directly from any page.

## Features Included

### 1. **ApplicationModal Component** (`app/components/ApplicationModal.tsx`)
- Modal with comprehensive application form
- Fields for personal information
- Education details section (current education, education level)
- Programme preferences (study level, programme selection)
- Additional message field
- Success notification after submission
- Fully responsive design

### 2. **ApplyButton Component** (`app/components/ApplyButton.tsx`)
- Reusable button component
- Multiple variants: primary, secondary, outline
- Multiple sizes: sm, md, lg
- Can be used anywhere in the app

### 3. **ApplicationProvider** (`app/providers/ApplicationProvider.tsx`)
- Global state management for the modal
- Provides `useApplication()` hook
- Automatically renders modal at root level

### 4. **API Endpoint** (`app/api/applications/route.ts`)
- Handles form submission
- Validates required fields
- Returns success/error response

## Form Fields

### Personal Information
- **Full Name** (required)
- **Email** (required)
- **Phone Number** (required)
- **Country** (required, dropdown)

### Education Details
- **Current School/College Name** (optional)
- **Current Education Level** (required)
  - 12th Pass
  - Diploma
  - Bachelor's Degree
  - Master's Degree
  - Other

### Programme Preferences
- **Study Level** (required)
  - Undergraduate
  - Postgraduate
  - PhD/Doctoral
  - Diploma
- **Programme of Interest** (required)
  - Computer Science & Engineering
  - Engineering
  - Management
  - Commerce
  - Law
  - Design
  - Media Studies
  - Liberal Arts & Sciences
  - Allied Health Sciences
  - Information Science

### Additional
- **Additional Message** (optional)

## Usage

### Method 1: Using the ApplyButton Component (Recommended)

```tsx
import { ApplyButton } from "@/app/components/ApplyButton";

export default function MyComponent() {
  return (
    <div>
      {/* Basic usage */}
      <ApplyButton />

      {/* Custom text */}
      <ApplyButton>Apply Now</ApplyButton>

      {/* Different variants */}
      <ApplyButton variant="primary" />
      <ApplyButton variant="secondary" />
      <ApplyButton variant="outline" />

      {/* Different sizes */}
      <ApplyButton size="sm" />
      <ApplyButton size="md" />
      <ApplyButton size="lg" />

      {/* Custom styling */}
      <ApplyButton className="w-full" />
    </div>
  );
}
```

### Method 2: Using the useApplication Hook

```tsx
"use client";

import { useApplication } from "@/app/providers/ApplicationProvider";

export default function MyComponent() {
  const { openModal, closeModal, isOpen } = useApplication();

  return (
    <div>
      <button onClick={openModal}>
        Click to Apply
      </button>
    </div>
  );
}
```

### Method 3: Direct Button Implementation

```tsx
<button
  onClick={() => {
    // Your custom logic
    // Then open modal
  }}
  className="your-custom-class"
>
  Apply Now
</button>
```

## Replacing Existing Apply Buttons

### Before
```tsx
<a href="/apply" className="btn">
  Apply Now
</a>
```

### After
```tsx
import { ApplyButton } from "@/app/components/ApplyButton";

<ApplyButton />
```

Or if you need custom styling:

```tsx
"use client";

import { useApplication } from "@/app/providers/ApplicationProvider";

function CustomApplyButton() {
  const { openModal } = useApplication();
  
  return (
    <button 
      onClick={openModal}
      className="your-custom-styles"
    >
      Apply Now
    </button>
  );
}
```

## Button Variants

### Primary (Default)
```tsx
<ApplyButton variant="primary" />
```
- Background: #0A8F96 (Teal)
- Used for main call-to-action

### Secondary
```tsx
<ApplyButton variant="secondary" />
```
- Background: #F58A3C (Orange)
- Used for alternative actions

### Outline
```tsx
<ApplyButton variant="outline" />
```
- Border: #0A8F96
- Used for secondary emphasis

## Button Sizes

- **sm**: Small - `px-4 py-2 text-sm`
- **md**: Medium - `px-6 py-3 text-base` (default)
- **lg**: Large - `px-8 py-4 text-lg`

## API Implementation

### Current Implementation
The API endpoint at `/api/applications` currently:
1. Validates required fields
2. Logs the submission to console
3. Returns success response

### TODO: Next Steps

To fully implement the application system, you need to:

1. **Database Integration**
   ```ts
   // Save application to database
   const application = await db.applications.create(data);
   ```

2. **Email Notifications**
   ```ts
   // Send confirmation email to user
   await sendEmail({
     to: data.email,
     subject: "Application Received",
     template: "application-confirmation",
     data
   });

   // Send notification to admin
   await sendEmail({
     to: "admin@presidency.edu",
     subject: "New Application Submitted",
     template: "new-application-admin",
     data
   });
   ```

3. **CRM Integration** (e.g., Salesforce, HubSpot)
   ```ts
   // Add to CRM
   await crm.createLead(data);
   ```

4. **Email Service Setup**
   - Configure Nodemailer, SendGrid, or similar
   - Create email templates
   - Set up environment variables

## Files Modified/Created

### Created Files
- `app/components/ApplicationModal.tsx` - Main modal component
- `app/components/ApplyButton.tsx` - Reusable button component
- `app/providers/ApplicationProvider.tsx` - Global provider & hook
- `app/api/applications/route.ts` - API endpoint

### Modified Files
- `app/layout.tsx` - Added ApplicationProvider wrapper
- `app/components/Navigation.tsx` - Updated Apply Now buttons to use modal

## Examples in the Codebase

The following locations already use the new modal:
- Navigation component (desktop and mobile Apply buttons)
- Can be extended to all other CTA buttons throughout the site

## Styling Customization

To customize the modal appearance, edit `app/components/ApplicationModal.tsx`:

```tsx
// Change primary color
className="focus:ring-2 focus:ring-[#0A8F96]"
// Change to your preferred color

// Change button colors
className="bg-[#0A8F96]"
// Change to your preferred color
```

## Accessibility

The modal includes:
- Proper ARIA labels
- Keyboard navigation support
- Focus management
- Screen reader friendly form labels
- Semantic HTML structure

## Mobile Responsiveness

- Fully responsive design
- Touch-friendly form inputs
- Mobile-optimized modal width
- Proper padding for mobile devices

## Troubleshooting

### Modal not appearing
- Ensure component is wrapped in `ApplicationProvider`
- Check that layout.tsx includes the provider
- Verify useApplication is imported correctly

### Form not submitting
- Check API endpoint at `/api/applications`
- Check browser console for errors
- Verify all required fields are filled
- Check network tab for API response

### Styling issues
- Ensure Tailwind CSS is configured correctly
- Check color variables are defined
- Verify CSS classes are imported

## Contact Information

For questions or issues regarding the application modal system, contact the development team.

---

**Last Updated**: May 2026
**Version**: 1.0.0
