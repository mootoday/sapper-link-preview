# sapper-link-preview

Hi there! 👋

I was inspired by [@ilonacodes](https://twitter.com/ilonacodes)'s article on dev.to titled
["Frontend Shorts: How to create link content previewer with React, Vue, and Vanilla JavaScript"](https://dev.to/ilonacodes/frontend-shorts-how-to-create-link-content-previewer-with-react-vue-and-vanilla-javascript-1pm1)
and created this Sapper-version of a content previewer.

With Sapper, and likely Vue, React, etc. as well, we can leverage a backend service to fetch
URL preview information at runtime. This allows us to define a link including its preview
with a single component:

```
<LinkPreview href="https://dev.to">dev.to</LinkPreview>
```

The above renders as:

![Link Preview Example](./docs/sapper-link-preview-example.png "Logo Title Text 1")


The component uses the following information in the HTML:
* `$("head title").text()`
* `$("meta[name=description]").attr("content")`
* `$("meta[property='og:image']").attr("content")`

The above can be extended to support Facebook, Twitter, etc. meta tags too


Please check out Ilona's post on [dev.to](https://dev.to/ilonacodes/frontend-shorts-how-to-create-link-content-previewer-with-react-vue-and-vanilla-javascript-1pm1).