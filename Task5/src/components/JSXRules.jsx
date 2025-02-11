import React from 'react'

function JSXRules() {
    const rules = [
        "JSX must return a single parent element.",
        "JSX elements must be properly closed.",
        "JSX attributes use camelCase (e.g., className)."
    ]
    return (
        <div>
            <h1>JSX Rules</h1>
            <ul>
                {rules.map((rule) => <li>{rule}</li>
                )}
            </ul>
        </div>
    )
}

export default JSXRules
