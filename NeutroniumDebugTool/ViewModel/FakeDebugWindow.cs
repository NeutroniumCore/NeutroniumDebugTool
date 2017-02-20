using System.Windows.Input;

namespace NeutroniumDebugTool.ViewModel
{
    public class FakeDebugWindow
    {
        public bool VmDebug { get; set; } = true;
        public string ComponentName => "HTMLWindow";

        public ICommand DebugBrowser { get; set; }
        public ICommand DebugWindow { get; set; }
        public ICommand ShowInfo { get; set; }
    }
}
