# Language Hint Alternative Proposal

## Background

PR #412 added a `toolbar.languageHint` feature that displays language preference as a UI hint. However, the proposed zh-TW (Traditional Chinese) support in PR #95 would introduce a `toolbar.language` pill in the generation toolbar.

## Issue

There is a naming conflict: both features use similar naming (`languageHint` vs `language`), which could cause confusion or UX inconsistency.

## Proposed Alternative

Instead of adding a visible language selector pill in the toolbar, consider these alternatives:

### Option 1: Expand Existing Language Switcher
The existing `LanguageSwitcher` component in the header could be enhanced to include course language options for generation, rather than adding a new pill in the toolbar.

### Option 2: Context-Based Language Inference
Leverage the existing automatic language inference from PR #412 and expand its detection capabilities to include zh-TW detection based on:
- PDF content analysis
- User input patterns
- Browser locale

### Option 3: Settings-Based Default
Add a "Default Course Language" option in Settings, which applies automatically during generation without showing a UI pill.

## Recommendation

For PR #95, we recommend implementing **Option 1** - extending the existing header language switcher to include generation language options. This maintains consistency with PR #412 while avoiding UI duplication.

## Status

This is a proposal for coordinating PR #95 with the existing #412 implementation.