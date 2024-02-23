package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.DriverEntity;

@Repository
public interface DriverRepository extends JpaRepository<DriverEntity, Integer> {
	
	@Query("select d from DriverEntity d where d.driver_user_id.user_id=:id")
	DriverEntity getDriverByuserId(int id);
}
