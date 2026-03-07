package com.vrss.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vrss.service.VrssService;

@RestController
@RequestMapping(path = "/vrss")
public class VrssController {

	@Autowired
	private VrssService vrssServiceTest;

	@GetMapping(path = "/connectASMLserver")
	public String checkApi() {
		return vrssServiceTest.connectToASMLServerTest();
	}
}
