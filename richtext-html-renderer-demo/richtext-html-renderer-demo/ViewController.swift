//
//  ViewController.swift
//  richtext-html-renderer-demo
//
//  Created by Jingyu Kim on 2022/12/12.
//

import UIKit
import WebKit

class ViewController: UIViewController {
    var webView: WKWebView!

    var document: String {
        """
        {
                            "content": [
                                {
                                    "content": [
                                        {
                                            "value": "H1: 이것은 제목",
                                            "data": {},
                                            "nodeType": "text",
                                            "marks": []
                                        }
                                    ],
                                    "data": {},
                                    "nodeType": "heading-1"
                                },
                                {
                                    "content": [
                                        {
                                            "value": "H2: 이것은 제목",
                                            "data": {},
                                            "nodeType": "text",
                                            "marks": []
                                        }
                                    ],
                                    "data": {},
                                    "nodeType": "heading-2"
                                },
                                {
                                    "content": [
                                        {
                                            "value": "H3: 이것은 제목",
                                            "data": {},
                                            "nodeType": "text",
                                            "marks": []
                                        }
                                    ],
                                    "data": {},
                                    "nodeType": "heading-3"
                                },
                                {
                                    "content": [
                                        {
                                            "value": "H4: 이것은 제목",
                                            "data": {},
                                            "nodeType": "text",
                                            "marks": []
                                        }
                                    ],
                                    "data": {},
                                    "nodeType": "heading-4"
                                },
                                {
                                    "content": [
                                        {
                                            "value": "H5: 이것은 제목",
                                            "data": {},
                                            "nodeType": "text",
                                            "marks": []
                                        }
                                    ],
                                    "data": {},
                                    "nodeType": "heading-5"
                                },
                                {
                                    "content": [
                                        {
                                            "value": "H6: 이것은 제목",
                                            "data": {},
                                            "nodeType": "text",
                                            "marks": []
                                        }
                                    ],
                                    "data": {},
                                    "nodeType": "heading-6"
                                },
                                {
                                    "content": [
                                        {
                                            "value": "",
                                            "data": {},
                                            "nodeType": "text",
                                            "marks": []
                                        }
                                    ],
                                    "data": {},
                                    "nodeType": "paragraph"
                                },
                                {
                                    "content": [
                                        {
                                            "value": "bold",
                                            "data": {},
                                            "nodeType": "text",
                                            "marks": [
                                                {
                                                    "type": "bold"
                                                }
                                            ]
                                        }
                                    ],
                                    "data": {},
                                    "nodeType": "paragraph"
                                },
                                {
                                    "content": [
                                        {
                                            "value": "italic",
                                            "data": {},
                                            "nodeType": "text",
                                            "marks": [
                                                {
                                                    "type": "italic"
                                                }
                                            ]
                                        }
                                    ],
                                    "data": {},
                                    "nodeType": "paragraph"
                                },
                                {
                                    "content": [
                                        {
                                            "value": "underline",
                                            "data": {},
                                            "nodeType": "text",
                                            "marks": [
                                                {
                                                    "type": "underline"
                                                }
                                            ]
                                        }
                                    ],
                                    "data": {},
                                    "nodeType": "paragraph"
                                },
                                {
                                    "content": [
                                        {
                                            "value": "println",
                                            "data": {},
                                            "nodeType": "text",
                                            "marks": [
                                                {
                                                    "type": "code"
                                                }
                                            ]
                                        }
                                    ],
                                    "data": {},
                                    "nodeType": "paragraph"
                                },
                                {
                                    "content": [
                                        {
                                            "value": "",
                                            "data": {},
                                            "nodeType": "text",
                                            "marks": []
                                        },
                                        {
                                            "content": [
                                                {
                                                    "value": "link (naver)",
                                                    "data": {},
                                                    "nodeType": "text",
                                                    "marks": [
                                                        {
                                                            "type": "code"
                                                        }
                                                    ]
                                                }
                                            ],
                                            "data": {
                                                "uri": "https://naver.com"
                                            },
                                            "nodeType": "hyperlink"
                                        },
                                        {
                                            "value": "",
                                            "data": {},
                                            "nodeType": "text",
                                            "marks": []
                                        }
                                    ],
                                    "data": {},
                                    "nodeType": "paragraph"
                                },
                                {
                                    "content": [
                                        {
                                            "value": "중간 ",
                                            "data": {},
                                            "nodeType": "text",
                                            "marks": []
                                        },
                                        {
                                            "content": [
                                                {
                                                    "value": "링크",
                                                    "data": {},
                                                    "nodeType": "text",
                                                    "marks": []
                                                }
                                            ],
                                            "data": {
                                                "uri": "https://naver.com"
                                            },
                                            "nodeType": "hyperlink"
                                        },
                                        {
                                            "value": " 삽입",
                                            "data": {},
                                            "nodeType": "text",
                                            "marks": []
                                        }
                                    ],
                                    "data": {},
                                    "nodeType": "paragraph"
                                },
                                {
                                    "content": [
                                        {
                                            "content": [
                                                {
                                                    "content": [
                                                        {
                                                            "value": "UL",
                                                            "data": {},
                                                            "nodeType": "text",
                                                            "marks": []
                                                        }
                                                    ],
                                                    "data": {},
                                                    "nodeType": "paragraph"
                                                }
                                            ],
                                            "data": {},
                                            "nodeType": "list-item"
                                        },
                                        {
                                            "content": [
                                                {
                                                    "content": [
                                                        {
                                                            "value": "UL + ",
                                                            "data": {},
                                                            "nodeType": "text",
                                                            "marks": []
                                                        },
                                                        {
                                                            "content": [
                                                                {
                                                                    "value": "Link",
                                                                    "data": {},
                                                                    "nodeType": "text",
                                                                    "marks": []
                                                                }
                                                            ],
                                                            "data": {
                                                                "uri": "https://naver.com"
                                                            },
                                                            "nodeType": "hyperlink"
                                                        },
                                                        {
                                                            "value": "",
                                                            "data": {},
                                                            "nodeType": "text",
                                                            "marks": []
                                                        }
                                                    ],
                                                    "data": {},
                                                    "nodeType": "paragraph"
                                                }
                                            ],
                                            "data": {},
                                            "nodeType": "list-item"
                                        },
                                        {
                                            "content": [
                                                {
                                                    "content": [
                                                        {
                                                            "value": "UL",
                                                            "data": {},
                                                            "nodeType": "text",
                                                            "marks": []
                                                        }
                                                    ],
                                                    "data": {},
                                                    "nodeType": "paragraph"
                                                }
                                            ],
                                            "data": {},
                                            "nodeType": "list-item"
                                        }
                                    ],
                                    "data": {},
                                    "nodeType": "unordered-list"
                                },
                                {
                                    "content": [
                                        {
                                            "content": [
                                                {
                                                    "content": [
                                                        {
                                                            "value": "OL",
                                                            "data": {},
                                                            "nodeType": "text",
                                                            "marks": []
                                                        }
                                                    ],
                                                    "data": {},
                                                    "nodeType": "paragraph"
                                                }
                                            ],
                                            "data": {},
                                            "nodeType": "list-item"
                                        },
                                        {
                                            "content": [
                                                {
                                                    "content": [
                                                        {
                                                            "value": "OL",
                                                            "data": {},
                                                            "nodeType": "text",
                                                            "marks": []
                                                        }
                                                    ],
                                                    "data": {},
                                                    "nodeType": "paragraph"
                                                }
                                            ],
                                            "data": {},
                                            "nodeType": "list-item"
                                        },
                                        {
                                            "content": [
                                                {
                                                    "content": [
                                                        {
                                                            "value": "OL",
                                                            "data": {},
                                                            "nodeType": "text",
                                                            "marks": []
                                                        }
                                                    ],
                                                    "data": {},
                                                    "nodeType": "paragraph"
                                                }
                                            ],
                                            "data": {},
                                            "nodeType": "list-item"
                                        }
                                    ],
                                    "data": {},
                                    "nodeType": "ordered-list"
                                },
                                {
                                    "content": [
                                        {
                                            "value": "block quote",
                                            "data": {},
                                            "nodeType": "text",
                                            "marks": []
                                        }
                                    ],
                                    "data": {},
                                    "nodeType": "paragraph"
                                },
                                {
                                    "content": [
                                        {
                                            "content": [
                                                {
                                                    "value": "contents",
                                                    "data": {},
                                                    "nodeType": "text",
                                                    "marks": []
                                                }
                                            ],
                                            "data": {},
                                            "nodeType": "paragraph"
                                        },
                                        {
                                            "content": [
                                                {
                                                    "value": "가나다라마바사아자차카타파하",
                                                    "data": {},
                                                    "nodeType": "text",
                                                    "marks": []
                                                }
                                            ],
                                            "data": {},
                                            "nodeType": "paragraph"
                                        }
                                    ],
                                    "data": {},
                                    "nodeType": "blockquote"
                                },
                                {
                                    "content": [],
                                    "data": {},
                                    "nodeType": "hr"
                                },
                                {
                                    "content": [
                                        {
                                            "content": [
                                                {
                                                    "content": [
                                                        {
                                                            "content": [
                                                                {
                                                                    "value": "기준1",
                                                                    "data": {},
                                                                    "nodeType": "text",
                                                                    "marks": []
                                                                }
                                                            ],
                                                            "data": {},
                                                            "nodeType": "paragraph"
                                                        }
                                                    ],
                                                    "data": {},
                                                    "nodeType": "table-header-cell"
                                                },
                                                {
                                                    "content": [
                                                        {
                                                            "content": [
                                                                {
                                                                    "value": "기준2",
                                                                    "data": {},
                                                                    "nodeType": "text",
                                                                    "marks": []
                                                                }
                                                            ],
                                                            "data": {},
                                                            "nodeType": "paragraph"
                                                        }
                                                    ],
                                                    "data": {},
                                                    "nodeType": "table-header-cell"
                                                }
                                            ],
                                            "data": {},
                                            "nodeType": "table-row"
                                        },
                                        {
                                            "content": [
                                                {
                                                    "content": [
                                                        {
                                                            "content": [
                                                                {
                                                                    "value": "내용1",
                                                                    "data": {},
                                                                    "nodeType": "text",
                                                                    "marks": []
                                                                }
                                                            ],
                                                            "data": {},
                                                            "nodeType": "paragraph"
                                                        }
                                                    ],
                                                    "data": {},
                                                    "nodeType": "table-cell"
                                                },
                                                {
                                                    "content": [
                                                        {
                                                            "content": [
                                                                {
                                                                    "value": "내용2",
                                                                    "data": {},
                                                                    "nodeType": "text",
                                                                    "marks": []
                                                                }
                                                            ],
                                                            "data": {},
                                                            "nodeType": "paragraph"
                                                        }
                                                    ],
                                                    "data": {},
                                                    "nodeType": "table-cell"
                                                }
                                            ],
                                            "data": {},
                                            "nodeType": "table-row"
                                        },
                                        {
                                            "content": [
                                                {
                                                    "content": [
                                                        {
                                                            "content": [
                                                                {
                                                                    "value": "내용3",
                                                                    "data": {},
                                                                    "nodeType": "text",
                                                                    "marks": []
                                                                }
                                                            ],
                                                            "data": {},
                                                            "nodeType": "paragraph"
                                                        }
                                                    ],
                                                    "data": {},
                                                    "nodeType": "table-cell"
                                                },
                                                {
                                                    "content": [
                                                        {
                                                            "content": [
                                                                {
                                                                    "value": "내용4",
                                                                    "data": {},
                                                                    "nodeType": "text",
                                                                    "marks": []
                                                                }
                                                            ],
                                                            "data": {},
                                                            "nodeType": "paragraph"
                                                        }
                                                    ],
                                                    "data": {},
                                                    "nodeType": "table-cell"
                                                }
                                            ],
                                            "data": {},
                                            "nodeType": "table-row"
                                        }
                                    ],
                                    "data": {},
                                    "nodeType": "table"
                                },
                                {
                                    "content": [],
                                    "data": {
                                        "target": {
                                            "sys": {
                                                "id": "1PfflGIhrOH1Itc8WsPpgP",
                                                "type": "Link",
                                                "linkType": "Asset"
                                            }
                                        }
                                    },
                                    "nodeType": "embedded-asset-block"
                                },
                                {
                                    "content": [],
                                    "data": {
                                        "target": {
                                            "sys": {
                                                "id": "5PaDKFLehbHt4rwi61uJEV",
                                                "type": "Link",
                                                "linkType": "Asset"
                                            }
                                        }
                                    },
                                    "nodeType": "embedded-asset-block"
                                },
                                {
                                    "content": [
                                        {
                                            "value": "",
                                            "data": {},
                                            "nodeType": "text",
                                            "marks": []
                                        }
                                    ],
                                    "data": {},
                                    "nodeType": "paragraph"
                                }
                            ],
                            "data": {},
                            "nodeType": "document"
                        }
        """
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        
        setupWebView()
        loadHtmlToWebView()
    }
    
    func setupWebView() {
        webView = WKWebView()
        self.view.addSubview(webView)
        webView.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            webView.topAnchor
                .constraint(equalTo: self.view.safeAreaLayoutGuide.topAnchor),
            webView.leftAnchor
                .constraint(equalTo: self.view.safeAreaLayoutGuide.leftAnchor),
            webView.bottomAnchor
                .constraint(equalTo: self.view.safeAreaLayoutGuide.bottomAnchor),
            webView.rightAnchor
                .constraint(equalTo: self.view.safeAreaLayoutGuide.rightAnchor)
        ])
    }
    
    func loadHtmlToWebView() {
        if let dic = convertStringToDictionary(text: document) {
            ContentfulRender().render(dic) { text in
                self.webView?.loadHTMLString(text, baseURL: nil)
            }
        }
    }
    
    func convertStringToDictionary(text: String) -> [String:AnyObject]? {
        if let data = text.data(using: .utf8) {
            do {
                let json = try JSONSerialization.jsonObject(with: data, options: .mutableContainers) as? [String:AnyObject]
                return json
            } catch {
                print(error)
            }
        }
        return nil
    }
}
