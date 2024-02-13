package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Role;
import com.example.demo.services.RoleService;

@RestController
public class RoleController {
	
	@Autowired
	RoleService rser;
	
	@PostMapping("/Save_Role")
	public void Save(@RequestBody Role r)
	{
		rser.save(r);
	}
	
}
