export const CONTEXT_REF = {
    NATIVE: 'native',
    WEBVIEW: 'webview',
};

class WebView {

    async waitForWebViewContextLoaded() {
        await driver.waitUntil(
            async () => {
                const currentContexts = await this.getCurrentContexts();

                return currentContexts.length > 1 &&
                    currentContexts.find(context => context.toLowerCase().includes(CONTEXT_REF.WEBVIEW)) !== 'undefined';
            }, {
                // Wait a max of 45 seconds. Reason for this high amount is that loading
                // a webview for iOS might take longer
                timeout: 45000,
                timeoutMsg: 'Webview context not loaded',
                interval: 100,
            },
        );
    }

    async switchToContext(context) {
        await driver.switchContext(context);
    }

    async getCurrentContexts() {
        return await driver.getContexts();
    }

}

export default new WebView();