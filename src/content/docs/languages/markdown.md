---
title: Markdown
description: "A lightweight markup language for formatting plaintext documents, created by John Gruber in 2004. Now one of the world's most popular markup languages."
compartir: true
tags: [documentation, language, markup, writing]
---

Markdown is a lightweight [[markup-language|markup language]] that allows you to add formatting elements to plaintext documents. Created by John Gruber in 2004, Markdown is now one of the world's most popular markup languages. Its philosophy emphasizes readability above all else—a Markdown-formatted document should be publishable as-is, as plain text, without looking like it's been marked up with tags or formatting instructions.

> [!info]
> This website's content is exclusively written in Markdown.

## Core Philosophy

Markdown's syntax is intended for one purpose: to be used as a format for writing for the web. It's **not a replacement for HTML**—rather, it's designed to make reading, writing, and editing prose easier. HTML is a publishing format; Markdown is a writing format.

The syntax consists entirely of punctuation characters that have been carefully chosen to look like what they mean. Asterisks around a word look like _emphasis_, and Markdown lists look like actual lists.

## Essential Syntax

### Headers

Create headers using `#` symbols—the number indicates the level:

```markdown
# Level 1 Header (H1)
## Level 2 Header (H2)
### Level 3 Header (H3)
```

### Text Formatting

- **Bold**: `**text**` or `__text__`
- _Italic_: `*text*` or `_text_`
- _**Bold and Italic**_: `***text***`
- ~~Strikethrough~~: `~~text~~`

### Lists

**Unordered lists** use `-`, `*`, or `+`:

```markdown
- Item 1
- Item 2
  - Sub-item
```

**Ordered lists** use numbers:

```markdown
1. First item
2. Second item
3. Third item
```

### Links and Images

- **Links**: `[Link text](URL "Optional title")`
- **Images**: `![Alt text](image-url "Optional title")`
- **Reference-style links**: `[Link text][reference-label]`

### Code

- **Inline code**: `` `code` ``
- **Code blocks**: Triple backticks with optional language specification

````markdown
```javascript
function hello() {
  console.log("Hello, world!");
}
```
````

## Markdown Flavors

One of the most confusing aspects of using Markdown is that practically every Markdown application implements a slightly different version of Markdown. These variants of Markdown are commonly referred to as flavors.

### CommonMark

CommonMark is a standardized version of Markdown that aims to create a consistent and universally understood specification. Around 2012, CommonMark was created as a formal and unambiguous specification, providing the foundation for many other implementations.

### GitHub Flavored Markdown (GFM)

GitHub Flavored Markdown (GFM) is a superset of CommonMark introduced by GitHub. It adds features like:
- **Tables**: Using pipe characters `|` to separate columns
- **Task lists**: `- [ ]` for unchecked, `- [x]` for checked
- **Strikethrough**: `~~text~~`
- **Syntax highlighting**: In fenced code blocks
- **Autolinks**: Automatic linking of URLs

### GitLab Flavored Markdown (GLFM)

GitLab Flavored Markdown consists of core Markdown features based on the CommonMark specification, extensions from GitHub Flavored Markdown, and extensions made specifically for GitLab. It includes features like mathematical expressions, diagrams, and enhanced task lists.

### Obsidian Flavored Markdown

Obsidian markdown differs from other markdown editors in that it uses the "Linked Thought" feature, which allows you to link thoughts and notes together seamlessly. It extends standard Markdown with:
- **Wiki-style links**: `[[Note Title]]`
- **Block references**: `[[Note^block-id]]`
- **Embeds**: `![[Note Title]]`
- **Tags**: `#tag`

## Extended Syntax Features

Many Markdown processors support additional elements beyond the basic syntax:

### Tables

```markdown
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |
```

### Footnotes

```markdown
Here's a sentence with a footnote.[^1]

[^1]: This is the footnote content.
```

### Definition Lists

```markdown
Term 1
: Definition 1

Term 2
: Definition 2a
: Definition 2b
```

### Mathematical Expressions

Many flavors support LaTeX-style math:
- **Inline**: `$x = y + 2$`
- **Block**: `$$x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}$$`

Markdown's simplicity and versatility make it an excellent choice for documentation, note-taking, and web content creation. Whether you're writing technical documentation, maintaining a [[digital-garden|digital garden]], or creating content for the web with [[static-site-generators|static site generators]], Markdown provides the perfect balance of readability and functionality. Many developers use Markdown alongside [[git|Git]] for version control, creating a powerful workflow for documentation and content management.
