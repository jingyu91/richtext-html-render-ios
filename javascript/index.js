import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

export class Renderer {
    static render(phrase) {
        let result = documentToHtmlString(phrase)
        return result
    }
};
