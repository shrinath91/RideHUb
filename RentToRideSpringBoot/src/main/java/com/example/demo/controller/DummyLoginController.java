package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Dummy_Login;
//import com.example.demo.entities.Login;
import com.example.demo.entities.Role;
import com.example.demo.services.LoginSupportService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class DummyLoginController {
	
	@Autowired
	LoginSupportService lservice;
	
	@PostMapping("/login")
	public Role checkLogin(@RequestBody Dummy_Login dummy_login)
	{
		String uname=dummy_login.getUser_name();
		String pwd=dummy_login.getPassword();
		
		Role role=lservice.getUser(uname, pwd);
		return role;
		
	}
}
