<?php
// src/Controller/BaseController.php
namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class BaseController extends AbstractController
{
    public function number()
    {
        $number = random_int(0, 100);

        return new Response(
            '<html><body>Lucky number: '.$number.'</body></html>'
        );
    }

    /**
     * @Route("/test")
     */
    public function test()
    {
		$json = [
			['id'=>1,'name'=>'Leanne','email'=>'leanne@email','company'=>['name'=>'leanne company']],
			['id'=>2,'name'=>'LEANne','email'=>'leanne@email','company'=>['name'=>'leanne company']],
		];
        return $this->json($json);
        return new Response('<html><body>Eventually, this will look better.</body></html>');
    }

	// Workout API endpoints...

	/**
	 * Get all plans associated with a user
	 * @Route("/users/{id}/plans", methods={"GET"})
	 */
	public function plansGet()
	{
		$plans = [
			['id'=>1,'name'=>'A'],
			['id'=>2,'name'=>'B']
		];
		return $this->json($plans);
	}

// TODO - should getting a Plan return its exercises?
    /**
     * Get all exercises associated with a plan
     * @Route("/plans/{id}/exercises", methods={"GET"})
     */
     // TODO - Request is unnecessary in the param list
    public function planExercisesGet(int $id, Request $request)
    {
        if ($id == 1) {
            $exercises = [
                ['id'=>1,'name'=>'squats'],
                ['id'=>2,'name'=>'ohp'],
                ['id'=>3,'name'=>'bb row'],
            ];
        } else if ($id == 2) {
            $exercises = [
                ['id'=>1,'name'=>'squats'],
                ['id'=>4,'name'=>'bench'],
                ['id'=>5,'name'=>'deadlift'],
            ];
        } else {
            $exercises = [
                ['id'=>6,'name'=>'bike'],
            ];
        }
        return $this->json($exercises);
    }
}
