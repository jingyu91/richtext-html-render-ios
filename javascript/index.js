import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import resolveResponse from 'contentful-resolve-response'

export class Renderer {
  	static render(phrase) {
    	let resolvedDocument = resolveResponse(phrase);

    	const options = {
		  renderNode: {
		    'embedded-asset-block': (node) => {
		      const url = node?.data?.target?.fields?.file?.url;

		      if (typeof url === "undefined") {

		      } else {
		        return `<img src="https:${url}" alt="${node.data.target.fields.title}" />`;
		      }
		    },
		  },
		};

    	let firstElement = resolvedDocument[0];
		let fields = firstElement.fields;
		let contentstext = fields.contentstext;
		var result = documentToHtmlString(contentstext, options);

    	return result
    }
};
