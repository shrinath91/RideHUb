package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entities.UserEntity;
import com.example.demo.repository.UserRepository;

@Service
public class UserService {
	@Autowired
	UserRepository urepo;
	
	
	public UserEntity saveUser(UserEntity u) {
		return urepo.save(u);
	}
	public List<UserEntity> getAllUser()
	{
		return urepo.findAll();
	}
	
	public UserEntity getUserDetails(String uname,String pwd)
	{
		UserEntity loginObj;
		Optional<UserEntity> log=urepo.getUserDetails(uname, pwd);
		try {
			loginObj=log.get();
			}
		catch(Exception e) {
			loginObj=null;
		}
		return loginObj;
	}
}
