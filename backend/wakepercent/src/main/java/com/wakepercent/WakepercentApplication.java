package com.wakepercent;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.sql.DataSource;


@SpringBootApplication
@RestController
public class WakepercentApplication {

	public static void main(String[] args) {
		SpringApplication.run(WakepercentApplication.class, args);
	}

}
