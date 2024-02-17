package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.UserEntity;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Integer> {
	@Query("select l from UserEntity l where username=:uname and password=:pwd")
	public Optional<UserEntity> getUserDetails(String uname, String pwd);
}
