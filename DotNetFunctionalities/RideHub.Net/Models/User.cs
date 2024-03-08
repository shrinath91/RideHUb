using System;
using System.Collections.Generic;

namespace RideHub.Net.Models
{
    public partial class User
    {
        public User()
        {
            Passengers = new HashSet<Passenger>();
        }

        public int UserId { get; set; }
        public string Username { get; set; } = null!;
        public string Password { get; set; } = null!;
        public int RoleId { get; set; }
        public int Status { get; set; }

        public virtual Role Role { get; set; } = null!;
        public virtual Driver? Driver { get; set; }
        public virtual ICollection<Passenger> Passengers { get; set; }
    }
}
