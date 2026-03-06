package com.vrss.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vrss.service.VrssService;

@RestController
@RequestMapping(path = "/vrss")
public class VrssController {

	private VrssService vrssService;

	public VrssController(VrssService vrssService) {
		super();
		this.vrssService = vrssService;
	}

	@GetMapping(path = "/connectASMLserver")
	public String checkApi() {
		vrssService.connectToASMLServer();
		return "executed";
	}
}
