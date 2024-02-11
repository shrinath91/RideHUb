package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Login;
import com.example.demo.entities.Role;
import com.example.demo.entities.User;
import com.example.demo.services.LoginService;
import com.example.demo.services.RoleService;
import com.example.demo.services.UserService;

@RestController
public class UserController {
	@Autowired
	UserService user;
	@Autowired
	RoleService rService;
	
	@Autowired
	LoginService lser;
	
	
	
//	@RequestMapping("/Save_User")
	@PostMapping("/Save_User")
	public String Save(@RequestBody User u)
	{
		System.out.println(u);
		System.out.println(u.getRole());
		System.out.println("hello i am in");
		Role r = rService.getRole(1);
		u.setRole(r);
		System.out.println(r);
		
		Login login=new Login(u.getLogin().getUsername(),u.getLogin().getPassword(),u.getLogin().getRole_id());
		lser.Save_Login(login);
		
		
		User uu = user.Save(u);
		return uu.toString();
	}
}
