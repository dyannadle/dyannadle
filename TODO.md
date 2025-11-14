# Remove Language Feature - Keep Only English

## Plan
- Remove LangProvider from App.tsx
- Remove LanguageToggle from Navbar.tsx
- Replace all t() calls with English strings in components
- Remove LangContext.tsx
- Remove hi.json and mr.json locale files
- Update components to remove useLang imports and usage

## Files to Edit
- src/App.tsx: Remove LangProvider
- src/components/Navbar.tsx: Remove LanguageToggle and t() usage
- src/components/HeroSection.tsx: Replace t() with English strings
- src/context/LangContext.tsx: Delete file
- src/components/LanguageToggle.tsx: Delete file
- src/locales/hi.json: Delete file
- src/locales/mr.json: Delete file

## Followup Steps
- Test the application to ensure no errors
- Verify all text displays correctly in English
