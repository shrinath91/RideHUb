package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.DummyUser;
import com.example.demo.entities.Login;
import com.example.demo.entities.Role;
import com.example.demo.entities.User;
import com.example.demo.services.LoginSupportService;
import com.example.demo.services.RoleService;
import com.example.demo.services.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class DummyRegistrationController {
	@Autowired
	User user;
	@Autowired
	Login login;
	@Autowired
	RoleService rservice;
	@Autowired
	LoginSupportService lservice;
	@Autowired
	UserService uservice;
	
	@PostMapping("/register")
	public User saveUser(@RequestBody DummyUser duser) {
		System.out.println(duser);
		Role r = rservice.getRole(duser.getRole());
		login.setRole_id(r);
		System.out.println("********************************88");
		System.out.println(r);
		login.setUsername(duser.getUser_name());
		login.setPassword(duser.getPassword());
		
		Login l1 = lservice.save_Login(login);
		
		user.setLogin(l1);
		user.setFname(duser.getFname());
		user.setLname(duser.getLname());
		user.setContact(duser.getContact());
		user.setEmail(duser.getEmail());
		user.setAddress(duser.getAddress());
		user.setEmergencyContact(duser.getEmergency_contact());
		user.setStatus("Active");
		return uservice.save(user);
	}
}
