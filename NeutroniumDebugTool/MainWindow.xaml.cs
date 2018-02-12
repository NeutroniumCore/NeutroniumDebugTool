using NeutroniumDebugTool.ViewModel;
using System.Windows;
using System;

namespace NeutroniumDebugTool
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
            //DataContext = new FakeDebugWindow();
            DataContext = new FakeInfoViewModel();
        }

        protected override void OnClosed(EventArgs e)
        {
            base.OnClosed(e);
            this.HtmlView.Dispose();
        }
    }
}
