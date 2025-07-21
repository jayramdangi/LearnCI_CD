import React from 'react';

const Birthday = () => {
  const isBirthday = true; // Assume it's always birthday for demo

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f9f9f9 0%, #ffe4e1 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
      padding: '2rem',
    }}>
      <h1 style={{
        fontSize: '3rem',
        color: '#d63384',
        marginBottom: '1rem',
        textShadow: '2px 2px #fff'
      }}>
        🎉 Happy Birthday Jayram Dangi! 🎉
      </h1>

      <div style={{
        maxWidth: '600px',
        backgroundColor: '#fff',
        padding: '2rem',
        borderRadius: '16px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
        textAlign: 'center'
      }}>
        <p style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#444' }}>
          🎂 Wishing you all the success, happiness, and love in the world on your special day.
          May your code compile perfectly, and your dreams deploy without bugs! 🧠💻✨
        </p>
        <p style={{ fontSize: '1rem', color: '#555' }}>
          🚀 Keep growing in tech, make your way to Google or beyond 🌍,
          and continue building awesome things that impact lives.
          You’re destined for greatness 🌟🔥
        </p>
        <p style={{ fontSize: '1rem', marginTop: '1rem', color: '#555' }}>
          🫂 Blessings from your friend, teammate, and well-wisher! 💖
        </p>
        <img
          src="/cake.png"
          alt="Birthday Cake"
          width="200"
          style={{ marginTop: '30px', borderRadius: '12px' }}
        />
      </div>
    </div>
  );
};

export default Birthday;
