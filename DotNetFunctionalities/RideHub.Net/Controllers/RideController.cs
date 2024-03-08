using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using RideHub.Net.Models;
using System.Drawing.Text;

namespace RideHubDotNet.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class RideController : Controller
    {
        private readonly ridehubContext db;

        [HttpGet]
        public List<Ride> getAllRide()
        {
            List<Ride> r = new List<Ride>();
            r = db.Rides.ToList();
            return r;
        }


        [HttpGet]
        public List<Ride> getActiveRide()
        {
            List<Ride>r= new List<Ride>();
            using(var db = new ridehubContext())
            {
                r = db.Rides.Where(t => t.RideStatus == "active").ToList();
            }
            return r;
        }
    }
}
