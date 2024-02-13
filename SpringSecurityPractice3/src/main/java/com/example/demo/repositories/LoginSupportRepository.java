package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Login;
import com.example.demo.entities.Role;

@Repository
public interface LoginSupportRepository extends JpaRepository<Login, Integer> {
	@Query("select u.role_id from Login u where u.username=:uname and u.password=:pwd")
	public Role getUser(String uname,String pwd);
}
