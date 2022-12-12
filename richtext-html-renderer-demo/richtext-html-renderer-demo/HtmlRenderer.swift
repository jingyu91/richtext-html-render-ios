//
//  HtmlRenderer.swift
//  richtext-html-renderer-demo
//
//  Created by Jingyu Kim on 2022/12/12.
//

import Foundation
import JavaScriptCore

class ContentfulRender {
    private let vm = JSVirtualMachine()
    private let context: JSContext
    
    init() {
        let jsCode = try? String.init(contentsOf: Bundle.main.url(forResource: "Renderer.bundle", withExtension: "js")!)
        self.context = JSContext(virtualMachine: self.vm)
        self.context.evaluateScript(jsCode)
        context.exceptionHandler = { context, exception in
            print("JS Error: \(String(describing: exception))")
        }
    }
    
    func render(_ sentence: Any, completion: @escaping (_ text: String) -> Void) {
        DispatchQueue.global().async {
            var text = ""
            let jsModule = self.context.objectForKeyedSubscript("Renderer")
            let contentfulRenderer = jsModule?.objectForKeyedSubscript("Renderer")
            if let result = contentfulRenderer?.objectForKeyedSubscript("render").call(withArguments: [sentence]) {
                text = result.toString()
            }
            
            DispatchQueue.main.async {
                completion(text)
            }
        }
    }
}
