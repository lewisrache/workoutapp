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
    public function plansGet(int $id)
    {
        $middle = new \App\Middle\Program();
        $plans = $middle->fetchAll($id);
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
        $middle = new \App\Middle\Program();
        $exercises = $middle->fetchExercises($id);
        return $this->json($exercises);
    }

    /**
     * Record an exercise
     * @Route("/exercises/", methods={"POST"})
     * TODO - need user id.
     */
    public function recordExercise()
    {
        $request = Request::createFromGlobals();
        $data = $request->getContent();
        error_log($data);
        // TODO??
        // TODO validation...
        $middle = new \App\Middle\Exercise();
        $exercise = $middle->record(json_decode($data));
        return new Response("why hello there");
    }


    /**
     * Record an exercise
     * @Route("/components/", methods={"POST"})
     */
    public function recordComponent()
    {
        $request = Request::createFromGlobals();
        $data = $request->getContent();
        error_log($data);
        // TODO??
        // TODO validation...
        $middle = new \App\Middle\Component();
        $component = $middle->record(json_decode($data));
        return new Response("why hello there");
    }

    // TODO - better auth
    // TODO - fix atom to not do idiotic autocomplete
    // TODO - something is making this crazy so i had to unRoute it
    /**
     * User login
     * @ Route("/users/login", methods={POST})
     */
    public function userLogin()
    {
        $request = Request::createFromGlobals();
        $data = $request->getContent();
        // TODO - actual validation and authentication
        $fakeNotAuth = ['isAuthenticated' => false, 'error' => "test error"];
        $middle = new \App\Middle\User();
        $fakeAuth = ['isAuthenticated' => true, 'user' => $middle->getByUsername('rachel')];
        return $this->json($fakeNotAuth);
    }
}
