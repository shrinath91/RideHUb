using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace RideHub.Net.Models
{
    public partial class ridehubContext : DbContext
    {
        public ridehubContext()
        {
        }

        public ridehubContext(DbContextOptions<ridehubContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Booking> Bookings { get; set; } = null!;
        public virtual DbSet<Driver> Drivers { get; set; } = null!;
        public virtual DbSet<Passenger> Passengers { get; set; } = null!;
        public virtual DbSet<Request> Requests { get; set; } = null!;
        public virtual DbSet<Ride> Rides { get; set; } = null!;
        public virtual DbSet<Role> Roles { get; set; } = null!;
        public virtual DbSet<Transaction> Transactions { get; set; } = null!;
        public virtual DbSet<User> Users { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseMySql("server=localhost;port=3306;user=root;password=root;database=ridehub", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.0.34-mysql"));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.UseCollation("utf8mb4_0900_ai_ci")
                .HasCharSet("utf8mb4");

            modelBuilder.Entity<Booking>(entity =>
            {
                entity.ToTable("booking");

                entity.HasIndex(e => e.PassId, "fk_passId_idx");

                entity.HasIndex(e => e.RideId, "fk_rideId_booking_idx");

                entity.Property(e => e.BookingId).HasColumnName("booking_id");

                entity.Property(e => e.BookingTime)
                    .HasMaxLength(6)
                    .HasColumnName("booking_time");

                entity.Property(e => e.Capacity)
                    .HasColumnName("capacity")
                    .HasDefaultValueSql("'1'");

                entity.Property(e => e.PassId).HasColumnName("pass_id");

                entity.Property(e => e.RideId).HasColumnName("ride_id");

                entity.Property(e => e.TotalAmmt).HasColumnName("total_ammt");

                entity.HasOne(d => d.Pass)
                    .WithMany(p => p.Bookings)
                    .HasForeignKey(d => d.PassId)
                    .HasConstraintName("fk_passId_booking");

                entity.HasOne(d => d.Ride)
                    .WithMany(p => p.Bookings)
                    .HasForeignKey(d => d.RideId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_rideId_booking");
            });

            modelBuilder.Entity<Driver>(entity =>
            {
                entity.ToTable("drivers");

                entity.HasIndex(e => e.DriverUserId, "UK_ryyy5536p05aip8xq6mqi4r8i")
                    .IsUnique();

                entity.HasIndex(e => e.Contact, "contact_UNIQUE")
                    .IsUnique();

                entity.HasIndex(e => e.Email, "email_UNIQUE")
                    .IsUnique();

                entity.HasIndex(e => e.EmergencyContact, "emergency_contact_UNIQUE")
                    .IsUnique();

                entity.HasIndex(e => e.NoPlate, "no_plate_UNIQUE")
                    .IsUnique();

                entity.HasIndex(e => e.RegistrationNo, "registration_no_UNIQUE")
                    .IsUnique();

                entity.Property(e => e.DriverId).HasColumnName("driver_id");

                entity.Property(e => e.Address)
                    .HasMaxLength(255)
                    .HasColumnName("address");

                entity.Property(e => e.Colour)
                    .HasMaxLength(255)
                    .HasColumnName("colour");

                entity.Property(e => e.Contact).HasColumnName("contact");

                entity.Property(e => e.DriverUserId).HasColumnName("driver_user_id");

                entity.Property(e => e.Email).HasColumnName("email");

                entity.Property(e => e.EmergencyContact).HasColumnName("emergency_contact");

                entity.Property(e => e.Fname)
                    .HasMaxLength(255)
                    .HasColumnName("fname");

                entity.Property(e => e.LicenceNo)
                    .HasMaxLength(255)
                    .HasColumnName("licence_no");

                entity.Property(e => e.Lname)
                    .HasMaxLength(255)
                    .HasColumnName("lname");

                entity.Property(e => e.Make)
                    .HasMaxLength(255)
                    .HasColumnName("make");

                entity.Property(e => e.Model)
                    .HasMaxLength(20)
                    .HasColumnName("model");

                entity.Property(e => e.NoPlate).HasColumnName("no_plate");

                entity.Property(e => e.Rating)
                    .HasColumnName("rating")
                    .HasDefaultValueSql("'5'");

                entity.Property(e => e.RegistrationNo).HasColumnName("registration_no");

                entity.HasOne(d => d.DriverUser)
                    .WithOne(p => p.Driver)
                    .HasForeignKey<Driver>(d => d.DriverUserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FKt8dtj1ldw7ybgj3uj688ywkae");
            });

            modelBuilder.Entity<Passenger>(entity =>
            {
                entity.ToTable("passengers");

                entity.HasIndex(e => e.Contact, "contact_UNIQUE")
                    .IsUnique();

                entity.HasIndex(e => e.Email, "email_UNIQUE")
                    .IsUnique();

                entity.HasIndex(e => e.EmergencyContact, "emergency_contact_UNIQUE")
                    .IsUnique();

                entity.HasIndex(e => new { e.PassengerUserId, e.Fname }, "fk_login_idx");

                entity.HasIndex(e => e.PassengerId, "passenger_id_UNIQUE")
                    .IsUnique();

                entity.Property(e => e.PassengerId).HasColumnName("passenger_id");

                entity.Property(e => e.Address)
                    .HasMaxLength(250)
                    .HasColumnName("address");

                entity.Property(e => e.Contact)
                    .HasMaxLength(10)
                    .HasColumnName("contact");

                entity.Property(e => e.Email)
                    .HasMaxLength(45)
                    .HasColumnName("email");

                entity.Property(e => e.EmergencyContact)
                    .HasMaxLength(10)
                    .HasColumnName("emergency_contact");

                entity.Property(e => e.Fname)
                    .HasMaxLength(45)
                    .HasColumnName("fname");

                entity.Property(e => e.Lname)
                    .HasMaxLength(45)
                    .HasColumnName("lname");

                entity.Property(e => e.PassengerUserId).HasColumnName("passenger_user_id");

                entity.Property(e => e.Rating).HasColumnName("rating");

                entity.HasOne(d => d.PassengerUser)
                    .WithMany(p => p.Passengers)
                    .HasForeignKey(d => d.PassengerUserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_user_id");
            });

            modelBuilder.Entity<Request>(entity =>
            {
                entity.ToTable("requests");

                entity.HasIndex(e => e.PassengerId, "fk_passenger_id_idx");

                entity.Property(e => e.RequestId).HasColumnName("request_id");

                entity.Property(e => e.PassengerId).HasColumnName("passenger_id");

                entity.Property(e => e.RequestTime)
                    .HasColumnType("datetime")
                    .HasColumnName("request_time")
                    .HasDefaultValueSql("CURRENT_TIMESTAMP");

                entity.Property(e => e.RideId).HasColumnName("ride_id");

                entity.Property(e => e.Status)
                    .HasColumnName("status")
                    .HasDefaultValueSql("'1'");

                entity.HasOne(d => d.Passenger)
                    .WithMany(p => p.Requests)
                    .HasForeignKey(d => d.PassengerId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_passenger_user_id");
            });

            modelBuilder.Entity<Ride>(entity =>
            {
                entity.ToTable("rides");

                entity.HasIndex(e => e.RideDriverId, "ride_driver_id_idx");

                entity.Property(e => e.RideId).HasColumnName("ride_id");

                entity.Property(e => e.CurrentCapacity).HasColumnName("current_capacity");

                entity.Property(e => e.EndLocation)
                    .HasMaxLength(45)
                    .HasColumnName("end_location");

                entity.Property(e => e.Fare).HasColumnName("fare");

                entity.Property(e => e.RideDriverId).HasColumnName("ride_driver_id");

                entity.Property(e => e.RideStatus)
                    .HasMaxLength(10)
                    .HasColumnName("ride_status")
                    .HasDefaultValueSql("'active'");

                entity.Property(e => e.RideTime)
                    .HasColumnType("datetime")
                    .HasColumnName("ride_time");

                entity.Property(e => e.StartLocation)
                    .HasMaxLength(45)
                    .HasColumnName("start_location");

                entity.Property(e => e.TotalCapacity).HasColumnName("total_capacity");

                entity.HasOne(d => d.RideDriver)
                    .WithMany(p => p.Rides)
                    .HasForeignKey(d => d.RideDriverId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("ride_driver_id");

                entity.HasMany(d => d.Passengers)
                    .WithMany(p => p.Rides)
                    .UsingEntity<Dictionary<string, object>>(
                        "RidePassenger",
                        l => l.HasOne<Passenger>().WithMany().HasForeignKey("PassengerId").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("fk_ridepassenger_passid"),
                        r => r.HasOne<Ride>().WithMany().HasForeignKey("RideId").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("fk_ridepassenger_ride_id"),
                        j =>
                        {
                            j.HasKey("RideId", "PassengerId").HasName("PRIMARY").HasAnnotation("MySql:IndexPrefixLength", new[] { 0, 0 });

                            j.ToTable("ride_passengers");

                            j.HasIndex(new[] { "PassengerId" }, "fk_ridepassenger_passid_idx");

                            j.IndexerProperty<int>("RideId").HasColumnName("ride_id");

                            j.IndexerProperty<int>("PassengerId").HasColumnName("passenger_id");
                        });
            });

            modelBuilder.Entity<Role>(entity =>
            {
                entity.ToTable("roles");

                entity.Property(e => e.RoleId)
                    .ValueGeneratedNever()
                    .HasColumnName("role_id");

                entity.Property(e => e.RoleName)
                    .HasMaxLength(45)
                    .HasColumnName("role_name");
            });

            modelBuilder.Entity<Transaction>(entity =>
            {
                entity.HasKey(e => e.TransId)
                    .HasName("PRIMARY");

                entity.ToTable("transactions");

                entity.HasIndex(e => e.PassengerId, "fk_tran_passid_idx");

                entity.Property(e => e.TransId).HasColumnName("trans_id");

                entity.Property(e => e.Ammount)
                    .HasPrecision(5, 2)
                    .HasColumnName("ammount");

                entity.Property(e => e.Description)
                    .HasMaxLength(45)
                    .HasColumnName("description");

                entity.Property(e => e.DriverId).HasColumnName("driver_id");

                entity.Property(e => e.PassengerId).HasColumnName("passenger_id");

                entity.Property(e => e.TransDate)
                    .HasColumnType("datetime")
                    .HasColumnName("trans_date");

                entity.HasOne(d => d.Passenger)
                    .WithMany(p => p.Transactions)
                    .HasForeignKey(d => d.PassengerId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_tran_passid");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("users");

                entity.HasIndex(e => e.RoleId, "fk_login_role_idx");

                entity.HasIndex(e => e.Password, "password_UNIQUE")
                    .IsUnique();

                entity.HasIndex(e => e.UserId, "user_id_UNIQUE")
                    .IsUnique();

                entity.HasIndex(e => e.Username, "username_UNIQUE")
                    .IsUnique();

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.Property(e => e.Password)
                    .HasMaxLength(250)
                    .HasColumnName("password");

                entity.Property(e => e.RoleId).HasColumnName("role_id");

                entity.Property(e => e.Status).HasColumnName("status");

                entity.Property(e => e.Username)
                    .HasMaxLength(45)
                    .HasColumnName("username");

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.Users)
                    .HasForeignKey(d => d.RoleId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_users_roleid");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
