package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Login;
import com.example.demo.services.LoginService;

@RestController
public class LoginController {
	
	@Autowired
	LoginService lser;
	
	@RequestMapping("/Save_login")
	public void save(@RequestBody Login l)
	{
		lser.Save_Login(l);
	}
}
