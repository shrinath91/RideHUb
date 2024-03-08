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
//	public void approveLogin(int user_id) {
//		
//		UserEntity loginObject;
//		loginObject = urepo.findById(user_id).get();
//		loginObject.setStatus(1);
//		urepo.save(loginObject);
//	}
//	
//	public void disapproveLogin(int user_id) {
//		
//		UserEntity loginObject;
//		loginObject = urepo.findById(user_id).get();
//		loginObject.setStatus(0);
//		urepo.save(loginObject);
//		
//	}
	
	public void disapproveLogin(int user_id) {
		// Fetch the login by ID
		UserEntity user = urepo.findById(user_id).get();

		// Perform any business logic related to rejecting the login
		user.setStatus(0);

		// Save the updated login entity
		urepo.save(user);
	}

	// ----------------------------------------------------------------------------------------------------

	// Approval
	public void approveLogin(int user_id) {
		urepo.findById(user_id).ifPresent(login -> {
			// Perform the approval logic here
			// For example, set an approval status field on the Login entity
			login.setStatus(1);
			urepo.save(login);
		});
		// If the login is not present, no need to explicitly handle it
	}
}
