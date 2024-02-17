package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.DriverEntity;
import com.example.demo.entities.DummyDriverRegistration;
import com.example.demo.entities.DummyRideEntity;
import com.example.demo.entities.RideEntitiy;
import com.example.demo.entities.RoleEntity;
import com.example.demo.entities.UserEntity;
import com.example.demo.services.DriverService;
import com.example.demo.services.RideService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class RideController {

	@Autowired
	RideService rservice;
	
	@Autowired
	RideEntitiy ride;
	
	@Autowired
	DriverService dser;
	
	@GetMapping("/getAllRides")
	public List<RideEntitiy> getAllRides() {
		return rservice.getAllRides();
	}

	@PostMapping("/postRide")
	public RideEntitiy postRide(@RequestBody DummyRideEntity d)
	{
		DriverEntity de=dser.getOneDriver(d.getRide_driver_id());
		ride.setStart_location(d.getStart_location());
		ride.setEnd_location(d.getEnd_location());
		ride.setRide_time(d.getRide_time());
		ride.setFare(d.getFare());
		ride.setTotal_capacity(d.getTotal_capacity());
		ride.setCurrent_capacity(d.getCurrent_capacity());
		ride.setRide_status(d.getRide_status());
		ride.setRide_driver_id(de);
		
		
		
		return rservice.saveRide(ride);
	}
	
	@PostMapping("/deleteRide")
	public String delRide(@RequestParam("did")int did)
	{
		String str=rservice.delRide(did);
		return str;
	}
}
