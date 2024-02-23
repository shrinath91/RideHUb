package com.example.demo.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.DriverEntity;
import com.example.demo.entities.RideEntity;


@Repository
public interface RideRepository extends JpaRepository<RideEntity, Integer> {
	@Query("SELECT r FROM RideEntity r WHERE r.ride_driver_id = :driver")
    List<RideEntity> findByRideDriverId(@Param("driver") DriverEntity driver);
	
//	@Query("SELECT r FROM RideEntity r WHERE r.ride_driver_id.driver_user_id = :ride_driver_id")
//    List<RideEntity> findById(@Param("ride_driver_id") int ride_driver_id);
	
	@Query("select r.ride_driver_id.driver_id,d.fname,r.start_location,r.end_location,r.fare,r.total_capacity,r.current_capacity,r.ride_time  from RideEntity r JOIN DriverEntity d ON r.ride_driver_id.driver_id=d.driver_id where r.start_location =:start_loc and r.end_location =:end_loc")
	public List<Object> searchRide(String start_loc, String end_loc);

	
	@Query("select r.start_location,r.end_location,r.fare,r.current_capacity,r.total_capacity,d.fname,d.lname,d.rating,d.contact,d.email,d.make,d.model,d.no_plate from RideEntity r JOIN DriverEntity d ON r.ride_driver_id.driver_id=d.driver_id where r.ride_id=:r ")
	public List<Object> getRideDriver(int r);
}
