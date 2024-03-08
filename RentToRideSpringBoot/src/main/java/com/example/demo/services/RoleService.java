package com.example.demo.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.RoleEntity;
import com.example.demo.repository.RoleRepository;

@Service
public class RoleService {

	@Autowired
	RoleRepository rrepo;

	public RoleEntity saveRole(RoleEntity r) {
		return rrepo.save(r);
	}
	
	public List<RoleEntity> getAllRole()
	{
		return rrepo.findAll();
	}

	public RoleEntity getRole(int id)
	{
		return rrepo.findById(id).get();
	}
	
	
	
}
