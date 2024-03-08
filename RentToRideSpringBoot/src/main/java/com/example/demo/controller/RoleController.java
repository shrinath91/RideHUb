package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.RoleEntity;
import com.example.demo.services.RoleService;

@RestController
public class RoleController {

	@Autowired
	RoleService rservice;

	@PostMapping("/saveRole")
	public void saveRole(@RequestBody RoleEntity r) {
		rservice.saveRole(r);
	}

	@GetMapping("/getAllRole")
	public List<RoleEntity> getAllRole() {
		return rservice.getAllRole();
	}
}
