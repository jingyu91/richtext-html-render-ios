# Contentful richText to HTML

---



## Usage

```
document json
{
  nodeType: 'document',
  content: [
    {
      nodeType: 'paragraph',
      content: [
        {
          nodeType: 'text',
          value: 'Hello world!',
          marks: [],
        },
      ],
    },
  ],
};
```

1. convert json to Dictionary

2. reder

  ```swift
  ContentfulRender().render(dic) { text in
  	self.webView?.loadHTMLString(text, baseURL: nil)
  }
  ```
