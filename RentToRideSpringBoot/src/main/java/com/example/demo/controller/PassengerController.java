package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.PassengerEntity;
import com.example.demo.entities.DummyPassengerRegistration;
import com.example.demo.entities.RoleEntity;
import com.example.demo.entities.UserEntity;
import com.example.demo.services.PassengerService;
import com.example.demo.services.RoleService;
import com.example.demo.services.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class PassengerController {

	@Autowired
	PassengerService dservice;

	@Autowired
	UserService userservice;

	@Autowired
	RoleService rservice;

	@PostMapping("/savePassenger")
	public PassengerEntity savePassenger(@RequestBody PassengerEntity d) {
		return dservice.savePassenger(d);
	}

	@GetMapping("/getAllPassenger")
	public List<PassengerEntity> getAllPassenger() {
		return dservice.getAllPassenger();
	}
	

	@PostMapping("/registerPassenger")
	public PassengerEntity registerPassenger(@RequestBody DummyPassengerRegistration dpr) {
		RoleEntity r = rservice.getRole(3);
		UserEntity ue = new UserEntity(dpr.getUsername(), dpr.getPassword(), r, 1);
		userservice.saveUser(ue);
		PassengerEntity d = new PassengerEntity(ue,dpr.getFname(),dpr.getLname(),dpr.getContact(),dpr.getEmail(),dpr.getAddress(),dpr.getRating(),dpr.getEmergency_contact());
		dpr.setPassenger_user_id(ue.getUser_id());
		return dservice.savePassenger(d);
	}
}
