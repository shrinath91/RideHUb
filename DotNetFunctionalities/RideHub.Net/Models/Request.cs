using System;
using System.Collections.Generic;

namespace RideHub.Net.Models
{
    public partial class Request
    {
        public int RequestId { get; set; }
        public int PassengerId { get; set; }
        public int RideId { get; set; }
        public DateTime RequestTime { get; set; }
        public int Status { get; set; }

        public virtual Passenger Passenger { get; set; } = null!;
    }
}
