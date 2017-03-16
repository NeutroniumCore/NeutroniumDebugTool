using System.Windows.Input;

namespace NeutroniumDebugTool.ViewModel
{
    public class FakeInfoViewModel
    {
        public string CoreVersion { get; set; } = "0.4.0";
        public string WebBrowser { get; set; } = "Chromium 56.0.2924.76";
        public string BrowserBinding { get; set; } = "ChromiumFX";
        public string JavascriptFramework { get; set; } = "Vue.js 2.2.1";
        public string MVVMBinding { get; set; } = "VueInjectorV2";
    }
}
