using Microsoft.AspNetCore.Mvc;

namespace MusiClasifica.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult ImageCover()
        {
            return View();
        }

        public IActionResult Lyrics()
        {
            return View();
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
