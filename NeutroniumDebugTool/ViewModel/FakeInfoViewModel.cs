using System.Windows.Input;

namespace NeutroniumDebugTool.ViewModel
{
    public class FakeInfoViewModel
    {
        public string CoreVersion { get; set; } = "0.4.0";
        public string WPFVersion { get; set; } = "0.5.0";
        public string WebBrowser { get; set; } = "Chromium";
        public string JavascriptFrameworkVersion { get; set; } = "2.2.1";
        public string WebBrowserVersion { get; set; } = "56.0.2924.76";
        public string JavascriptFramework { get; set; } = "Vue.js";
        public string BrowserBinding { get; set; } = "ChromiumFX";
        
        public string MVVMBinding { get; set; } = "VueInjectorV2";
    }
}
