package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.DriverEntity;
import com.example.demo.entities.DummyRideEntity;
import com.example.demo.entities.RideEntity;
import com.example.demo.services.DriverService;
import com.example.demo.services.RideService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class RideController {

	@Autowired
	RideService rservice;
	
	@Autowired
	RideEntity ride;
	
	@Autowired
	DriverService dser;
	
	@GetMapping("/getAllRides")
	public List<RideEntity> getAllRides() {
		return rservice.getAllRides();
	}

	@PostMapping("/postRide")
	public RideEntity postRide(@RequestBody DummyRideEntity d)
	{
		System.out.println("*****************");
		System.out.println(d);
		DriverEntity de=dser.getDriverByUserId(d.getRide_driver_id());
		RideEntity ride = new RideEntity();
		ride.setStart_location(d.getStart_location());
		ride.setEnd_location(d.getEnd_location());
		ride.setRide_time(d.getRide_time());
		ride.setFare(d.getFare());
		ride.setTotal_capacity(d.getTotal_capacity());
		ride.setCurrent_capacity(d.getCurrent_capacity());
		ride.setRide_status("active");
		ride.setRide_driver_id(de);
		
		
		
		return rservice.saveRide(ride);
		
	}
	
	@PostMapping("/deleteRide")
	public String delRide(@RequestParam("did")int did)
	{
		String str=rservice.delRide(did);
		return str;
	}
	

	@GetMapping("/getRideById/{ride_driver_id}")
    public List<RideEntity> getRidesByDriverId(@PathVariable int ride_driver_id) {
        DriverEntity driver = new DriverEntity();
        driver.setDriver_id(ride_driver_id);
        return rservice.getRidesByDriverId(driver);
    }
	
	
//	
//	@GetMapping("/getActiveRidesById/{ride_driver_id}")
//    public List<RideEntity> getActiveRidesById(@PathVariable int ride_driver_id) {
//        return rservice.getActiveRidesByDriverId(ride_driver_id);
//    }
//	
	
//	 @GetMapping("/getDriverDetails/{rideId}")
//	    public ResponseEntity<DriverEntity> getDriverDetails(@PathVariable int rideId) {
//	       
//	            DriverEntity  driverDetails = rservice.getDriverDetails(rideId);
//	            return ResponseEntity.ok(driverDetails);
//	       
//	 }
	
	@GetMapping("/getdride")
	public List<Object> getRideDriver(@RequestParam("rid")int r)
	{
		return rservice.getRideDriver(r);
	}
}
