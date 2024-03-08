package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.DriverEntity;
import com.example.demo.entities.DummyDriverRegistration;
import com.example.demo.entities.RoleEntity;
import com.example.demo.entities.UserEntity;
import com.example.demo.services.DriverService;
import com.example.demo.services.RideService;
import com.example.demo.services.RoleService;
import com.example.demo.services.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class DriverController {
	@Autowired
	DriverService dservice;
	@Autowired
	UserService userservice;

	@Autowired
	RoleService rservice;
	
	@Autowired
	RideService rser;
	
	 @GetMapping("/getDriverDetails/{ride_driver_id}")
	    public DriverEntity getDriverDetails(@PathVariable int ride_driver_id) {
	        return dservice.getDriverDetails(ride_driver_id);
	    }

	@PostMapping("/saveDriver")
	public DriverEntity saveDriver(@RequestBody DriverEntity d) {
		return dservice.saveDriver(d);
	}

	@GetMapping("/getAllDriver")
	public List<DriverEntity> getAllDriver() {
		return dservice.getAllDriver();
	}

	@PostMapping("/registerDriver")
	public DriverEntity registerDriver(@RequestBody DummyDriverRegistration ddr) {
		System.out.println(ddr);
		RoleEntity r = rservice.getRole(2);
		UserEntity ue = new UserEntity(ddr.getUsername(), ddr.getPassword(), r, 0);
		userservice.saveUser(ue);
		DriverEntity d = new DriverEntity(
			    ddr.getFname(),
			    ddr.getLname(),
			    ddr.getAddress(),
			    ddr.getContact(),
			    ddr.getEmail(),
			    ddr.getEmergency_contact(),
			    ddr.getLicence_no(),
			    5,
			    ddr.getModel(), 
			    ddr.getNo_plate(),
			    ddr.getRegistration_no(),
			    ddr.getMake(),
			    ddr.getColour(),
			    ue
			);

		ddr.setDriver_user_id(ue.getUser_id());		
		return dservice.saveDriver(d);
	}
	
	@GetMapping("/getMyRide/{rid}")
	public List<Object> getMyRide(@PathVariable("rid")int r)
	{
		return rser.getMyRide(r);
	}
	
}
