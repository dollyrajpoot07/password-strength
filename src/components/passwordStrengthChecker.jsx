'use client';
import React, { useState } from 'react';
import styles from './passwordStrengthChecker.module.css'; // Ensure the path is relative

export default function PasswordStrengthChecker() {
    const [password, setPassword] = useState('');
    const [strength, setStrength] = useState('');

    const calculateStrength = (value) => {
        if (!value) return '';
        if (value.length < 8) return 'Weak Password';
        if (/[A-Z]/.test(value) && /[0-9]/.test(value) && /[^A-Za-z0-9]/.test(value)) {
            return 'Strong and good Password';
        }
        return 'Medium Password';
    };

    const handleChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        setStrength(calculateStrength(value));
    };

    const strengthClass = strength.toLowerCase().replace(/\s+/g, '-'); // for className safety

    return (
        <div className={styles.container}>
            <h2>Password Strength Checker</h2>
            <input
                type="password"
                value={password}
                onChange={handleChange}
                placeholder="Enter password"
                className={styles.input}
            />

            {password && (
                <div className={styles.strengthWrapper}>
                    <h3>Stength Displayed Below</h3>
                    <div className={styles.strengthBar}>
                        <div className={`${styles.strengthIndicator} ${styles[strengthClass]}`} />
                    </div>
                    <p className={`${styles[strengthClass]}`}>
                        Strength: {strength}
                    </p>
                </div>
            )}
        </div>
    );
}
