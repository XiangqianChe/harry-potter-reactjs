// src/components/CharacterDetail.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useWizardContext } from '../context/WizardContext';

const DetailContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-top: 20px;
`;

const DetailTitle = styled.h1`
  color: #333;
`;

const DetailItem = styled.p`
  color: #555;
  margin: 8px 0;
`;

const ErrorMessage = styled.p`
  color: #ff6347; /* Tomato */
`;

const ReturnHomeLink = styled.a`
  color: #333;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #555;
  }
`;

const LoadingSpinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #3498db; /* Dodger Blue */
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const CharacterDetail = () => {
    const { selectedWizard } = useWizardContext();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                // Simulate delay for demonstration purposes
                await new Promise(resolve => setTimeout(resolve, 1000));
                // Replace with your actual API call
                // const response = await fetchWizardById(selectedWizard.id);
                // const data = await response.json();
                // Uncomment the lines above and replace the placeholder code when using a real API

                // Placeholder code for demonstration purposes
                const data = { id: 1, name: 'Harry Potter', house: 'Gryffindor', dateOfBirth: 'July 31, 1980' };

                if (data) {
                    setError(null);
                } else {
                    setError('Error fetching wizard details');
                }
            } catch (error) {
                setError('Error fetching wizard details');
            } finally {
                setLoading(false);
            }
        };

        if (selectedWizard) {
            fetchData();
    }
    }, [selectedWizard]);

    return (
        <DetailContainer>
            {loading && <LoadingSpinner />}
            {error ? (
                <ErrorMessage>{error}</ErrorMessage>
            ) : (
        <div>
                        {selectedWizard ? (
                            <div>
                                <DetailTitle>{selectedWizard.name}</DetailTitle>
                                <DetailItem>House: {selectedWizard.house}</DetailItem>
                                <DetailItem>Date of Birth: {selectedWizard.dateOfBirth}</DetailItem>
                                <DetailItem>Wand: {selectedWizard.wand}</DetailItem>
                                <DetailItem>Patronus: {selectedWizard.patronus}</DetailItem>
                                <DetailItem>{selectedWizard.additionalInfo}</DetailItem>
                            </div>
                    ) : (
                        <p>Select a wizard to view details.</p>
                    )}
                    <ReturnHomeLink href="/">Return to Home</ReturnHomeLink>
                </div>
            )}
        </DetailContainer>
    );
};

export default CharacterDetail;
