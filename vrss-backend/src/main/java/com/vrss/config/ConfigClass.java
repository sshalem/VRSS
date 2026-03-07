package com.vrss.config;

import java.io.InputStream;
import java.security.KeyStore;
import java.security.cert.Certificate;
import java.security.cert.CertificateFactory;
import java.util.Collection;

import javax.net.ssl.SSLContext;

import org.apache.http.conn.ssl.SSLConnectionSocketFactory;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.ssl.SSLContextBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.web.client.RestTemplate;

@Configuration
public class ConfigClass {

	@Bean
	RestTemplate restTemplate() throws Exception {

		// Load PEM chain from resources
		ClassPathResource resource = new ClassPathResource("certificate/f28ecentre01-intel-com-chain.pem");
		InputStream pemInputStream = resource.getInputStream();

		CertificateFactory cf = CertificateFactory.getInstance("X.509");
		Collection<? extends Certificate> certs = cf.generateCertificates(pemInputStream);

		// Create in-memory TrustStore and add Certificates
		KeyStore trustStore = KeyStore.getInstance(KeyStore.getDefaultType());
		trustStore.load(null, null);

		int i = 0;
		for (Certificate cert : certs) {
			trustStore.setCertificateEntry("cert" + i++, cert);
		}

		// Build SSL context from Structure
		SSLContext sslContext = SSLContextBuilder.create().loadTrustMaterial(trustStore, null).build();

		// Create HttpClient using SSL context
		SSLConnectionSocketFactory socketFactory = new SSLConnectionSocketFactory(sslContext);
		CloseableHttpClient httpClient = HttpClients.custom().setSSLSocketFactory(socketFactory).build();

		// Use HttpClient in RestTemplate
		HttpComponentsClientHttpRequestFactory factory = new HttpComponentsClientHttpRequestFactory(httpClient);

		return new RestTemplate(factory);
	}
}
