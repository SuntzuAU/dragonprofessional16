# Interlink Rules

## Rules
- No footer links ever. All contextual in body copy.
- Every post: min 1 internal + min 1 external link in frontmatter
- Never repeat anchor text to same destination
- Never link same external site twice on one page

## Before Writing
1. Read `src/data/link-network.json` for anchor pools + adjacency map
2. Read `src/data/link-usage.json` for coverage counts + used anchors
3. Pick lowest-coverage external target with relevant topic match

## Frontmatter
```yaml
internalLinks:
  - to: "/news/related-post"
    anchor: "descriptive text"
externalLinks:
  - to: "voicerecognition.com.au"
    anchor: "authorised Dragon reseller Australia"
    url: "https://www.voicerecognition.com.au"
context: "descriptive"
```

## Draft Checklist
- Internal link with descriptive anchor
- Cross-site link (different from previous post)
- Anchor not already used
- "Links used" summary at end of draft
- Suggest 2-3 anchor options, let owner choose
