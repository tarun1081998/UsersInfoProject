using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using dotnetProject.Models;
using Microsoft.AspNetCore.Cors;

namespace dotnetProject.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [EnableCors("MyPolicy")]
    public class UserController : ControllerBase
    {
        public UserContext _context;
        public UserController(UserContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var user = from u in _context.Users
                        select u;
            return new OkObjectResult(new {users = user} );
        }

        [HttpPost]
        public void post([FromBody] User user)
        {
            _context.Users.Add(user);
            _context.SaveChanges();
        }

        [HttpPut("{id}")]
        public IActionResult update(int id, [FromBody] User user){
            var u1 = _context.Users.Where(u => u.Id==id).First();
            u1.Fname = user.Fname;
            u1.Lname = user.Lname;
            u1.Dob = user.Dob;
            u1.City = user.City;
            u1.Mnumber = user.Mnumber;
            _context.SaveChanges();
            return new OkObjectResult(new { user = u1 });
        }
    }
}
