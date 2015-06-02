using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Newtonsoft.Json;
using RoachFrontend.Models;
using System.Data.SqlClient;
using System.Configuration;

namespace RoachFrontend.Controllers
{
    public class HomeController : Controller
    {
        private static UserStat Lol;
        private static List<UserStat> statistics = new List<UserStat>();

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewData["user"] = Lol.UserId;
            
            ViewData["money"] = Lol.Money;
            

            ViewBag.Message = "Тараканьи Бега.";

            return View();
        }

        public ActionResult Manage()
        {
            return View();
        }

        public ActionResult General()
        {
            return View();
        }

        public ActionResult Tar()
        {
            return View();
        }

        public ActionResult Contact()
        {
            return View();
        }

        public ActionResult Chrome()
        {
            return View();
        }

        public ActionResult P()
        {
            return View();
        }

        public ActionResult Stats()
        {
            var data = JsonConvert.SerializeObject(new
            {
                stats = statistics,
                success = true
            });
            return Content(data);
        }

        int i;
        public ActionResult SaveStats(string data)
        {
            //var dbs = new DbService();
            var userStat = JsonConvert.DeserializeObject<UserStat>(data);
            var index = -1;
            try { index = statistics.FindIndex(x => x.UserId == userStat.UserId); }
            catch { index = 1; }
            if (index != -1)
            {
                userStat.Money += statistics[index].Money;
                statistics[index] = userStat;
            }
            else statistics.Add(userStat);
            return Content("OK");
            statistics.Add(userStat);


        }
        public ActionResult Trololo(string data)
        {

            Lol = JsonConvert.DeserializeObject<UserStat>(data);
            return Content("OK");
        }
    }
    /* public class DbService
     {
         public List<UserStat> GetStats()
         {
             var connectionString = ConfigurationManager.ConnectionStrings[0].ConnectionString;
             var conn = new SqlConnection(connectionString);
             conn.Open();
             SqlDataAdapter da = new SqlDataAdapter("select * from state", conn);
            
             da.Fill(dataTable);
             var dataRow = statsTable.NewRow();
             foreach(DataRow row in dataTable.Rows)
             {
                 var s = new UserStat();
                 s.UserId = row["UserId"].ToString();
                 s.Money = (int)row["momey"];
                 yield return s;
             }

             return null;
         }
     }*/
}